// Preserve source bytes: never resize, recompress, or otherwise process images.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const assets=JSON.parse(await fs.readFile(path.join(root,'content/asset-integrity.json'),'utf8'));
const args=process.argv.slice(2);
const option=name=>{const i=args.indexOf(name);return i<0?undefined:args[i+1];};
const destination=path.resolve(option('--output')||path.join(root,'public/artwork'));
const selection=option('--only');
const pending=selection?assets.filter(a=>a.file===selection):assets;
if(!pending.length)throw Error('No matching original artwork.');
await fs.mkdir(destination,{recursive:true});
// Prune only generated artwork removed from the approved manifest.
if(!selection){const allowed=new Set(assets.map(a=>a.file));for(const file of await fs.readdir(destination)){if(/^(photo|project)-\d+\.png$/.test(file)&&!allowed.has(file))await fs.unlink(path.join(destination,file));}}
function verify(data,asset){if(data.length!==asset.bytes||createHash('sha256').update(data).digest('hex')!==asset.sha256)throw Error(`Original image verification failed: ${asset.file}`);}
async function readExisting(file){try{return await fs.readFile(file);}catch(error){if(error.code==='ENOENT')return null;throw error;}}
let copied=0,cached=0;
async function prepare(asset){
 const target=path.join(destination,asset.file);
 const existing=await readExisting(target);
 if(existing){verify(existing,asset);cached++;return;}
 let data=args.includes('--remote')?null:await readExisting(path.join(root,asset.source));
 if(!data){const response=await fetch(asset.url,{signal:AbortSignal.timeout(90000)});if(!response.ok)throw Error(`GitHub original ${asset.file}: HTTP ${response.status}`);data=Buffer.from(await response.arrayBuffer());}
 verify(data,asset);
 const temporary=target+`.${process.pid}.tmp`;
 await fs.writeFile(temporary,data);
 await fs.rename(temporary,target);copied++;
}
let index=0;
await Promise.all(Array.from({length:Math.min(4,pending.length)},async()=>{while(index<pending.length){const asset=pending[index++];await prepare(asset);}}));
console.log(`Original artwork verified: ${pending.length}; copied/downloaded: ${copied}; cached: ${cached}.`);
