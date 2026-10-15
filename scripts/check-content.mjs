import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
const read=file=>JSON.parse(fs.readFileSync(file));
const projects=read('projects.json'),photos=read('content/photos.json'),analysis=read('content/project-analysis.json'),assets=read('content/asset-integrity.json');
const byFile=new Map(assets.map(a=>[a.file,a]));
const base='https://raw.githubusercontent.com/codexola/Robert-Durana/39135e2c43e7127b7ea3c4fa1c09ce347b8adff5/';
const ids=new Set();
for(const project of projects){
 assert(!ids.has(project.id),`Duplicate project ${project.id}`);ids.add(project.id);
 const detail=analysis[project.id];assert(detail,`Missing analysis: ${project.title}`);
 for(const field of ['overview','observed','approach','basis'])assert(detail[field]?.length>30,`Missing ${field}: ${project.title}`);
 assert(detail.requirements.length>=3,`Incomplete scope: ${project.title}`);
 assert(detail.stack.length>=2,`Incomplete stack: ${project.title}`);
 for(const layer of detail.stack)for(const field of ['layer','technology','purpose'])assert(layer[field],`Missing stack ${field}: ${project.title}`);
 assert.equal(project.thumb,project.image,'Project image must remain unchanged');
}
assert.equal(ids.size,Object.keys(analysis).length,'Orphan project analysis');
assert.deepEqual(photos.map(p=>p.source),['me01.png','m022.png','m02342.png','Warm Neutral Couple Portrait.png','Couple Portrait in Green Circle.png','ChatGPT Image Oct 6, 2026, 08_52_21 AM.png'],'Every personal photo must be included');
for(const item of [...projects,...photos]){
 assert.equal(decodeURIComponent(item.originalUrl),base+item.source,'Original source URL must be preserved');
 assert(item.width>0&&item.height>0,'Image dimensions are required');
 assert.match(item.image,/^\/artwork\/(project|photo)-\d+\.png$/,'Use first-party original artwork');
 const asset=byFile.get(item.image.split('/').at(-1));assert(asset,'Missing asset verification record');
 const data=fs.readFileSync('public'+item.image);
 assert.equal(data.length,asset.bytes,'Original byte count changed');
 assert.equal(createHash('sha256').update(data).digest('hex'),asset.sha256,'Original image checksum changed');
}
assert.equal(assets.length,projects.length+photos.length,'Asset manifest must cover the complete collection');
for(const file of ['src.js','index.html'])assert(!/(?:mailto:|href=["']tel:|https?:\/\/wa\.me\/)/i.test(fs.readFileSync(file,'utf8')),`Personal contact link in ${file}`);
console.log(`PASS: ${projects.length} project analyses; ${photos.length} personal photos; all ${assets.length} first-party originals match SHA-256; no personal contact links.`);
