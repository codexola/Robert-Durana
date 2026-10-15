export function roomMarkup(photo) {
 const frame=(name,label)=>`<button class="room-frame ${name}" data-photo="0" aria-label="Open photograph 6 — ${label}"><span class="frame-mat"><img src="${photo.image}" alt="Photograph 6 in a ${label}" width="${photo.width}" height="${photo.height}" loading="lazy" decoding="async"></span></button>`;
 const box=(name,x,y,z,w,h,d,color)=>`<div class="room-box ${name}" style="--x:${x}px;--y:${y}px;--z:${z}px;--w:${w}px;--h:${h}px;--d:${d}px;--wood:${color}" aria-hidden="true">${['front','back','left','right','top','bottom'].map(face=>`<i class="box-${face}"></i>`).join('')}</div>`;
 return `<section class="personal section room-section" id="photos"><div class="section-heading"><div><span class="eyebrow muted">02 / A PERSONAL PERSPECTIVE</span><h2>A room for <em>memories.</em></h2></div><p>One photograph. A space of its own.<br>Step inside, look around, and explore.</p></div><div class="room-experience"><div class="room-topline"><span><i></i> THE MEMORY ROOM</span><span>PHOTO No. 06 / ORIGINAL</span></div><div class="room-stage" id="memory-room" role="group" aria-label="Interactive 3D room with photograph 6 on the walls, desk, and bed" tabindex="0" aria-describedby="room-instructions"><div class="room-halo" aria-hidden="true"></div><div class="room-rig"><div class="room-world"><div class="room-wall room-back" aria-hidden="true"><span class="wall-moulding"></span><span class="room-window"><i></i><i></i><i></i><i></i></span><span class="wall-title">THE ART OF<br><em>being here.</em></span></div><div class="room-wall room-side" aria-hidden="true"></div><div class="room-floor" aria-hidden="true"></div><div class="room-rug" aria-hidden="true"></div>${frame('frame-wall-main','main wall frame')}${frame('frame-wall-small','small wall frame')}${frame('frame-side','side wall frame')}
${box('desk-top',65,280,150,270,16,115,'#ae8054')}${box('desk-leg',75,296,105,14,144,14,'#654c36')}${box('desk-leg',305,296,105,14,144,14,'#654c36')}${box('desk-leg',75,296,195,14,144,14,'#654c36')}${box('desk-leg',305,296,195,14,144,14,'#654c36')}${frame('frame-desk','desktop frame')}<div class="room-notebook" aria-hidden="true">NOTES<br><span>& IDEAS</span></div><div class="room-lamp" aria-hidden="true"><i class="lamp-shade"></i><i class="lamp-stem"></i><i class="lamp-base"></i><i class="lamp-light"></i></div>
${box('chair-seat',160,360,290,80,13,80,'#6a7d6c')}${box('chair-back',160,290,325,80,75,13,'#6a7d6c')}${box('chair-leg',165,373,260,9,67,9,'#4c493b')}${box('chair-leg',225,373,320,9,67,9,'#4c493b')}
${box('bed-base',420,375,310,220,55,280,'#755a43')}${box('bed-headboard',415,245,160,230,150,18,'#90785f')}${box('bed-mattress',420,340,310,220,38,280,'#e3dccb')}${box('bed-duvet',418,330,365,224,20,180,'#94a08a')}${box('bed-pillow',440,318,205,78,21,50,'#f0eadc')}${box('bed-pillow',535,318,205,78,21,50,'#e4dfce')}${frame('frame-bed','frame resting on the bed')}${box('bedside',650,370,190,60,70,65,'#b58b61')}${frame('frame-bedside','bedside frame')}
${box('plant-pot',25,375,350,60,65,60,'#b68d6d')}<div class="room-plant" aria-hidden="true">${Array.from({length:7},(_,i)=>`<i style="--leaf:${i}"></i>`).join('')}</div><div class="room-pendant" aria-hidden="true"><i></i></div><div class="room-light-beam" aria-hidden="true"></div></div></div><span class="room-corner-label" aria-hidden="true">SLOW DOWN.<br>STAY A LITTLE.</span></div><div class="room-toolbar"><p id="room-instructions">Drag to look around · Click any frame to open the photo</p><div class="room-controls"><button id="room-left" aria-label="Rotate room left">←</button><button id="room-right" aria-label="Rotate room right">→</button><button id="room-reset" aria-label="Reset room view">Reset view</button><button id="room-motion" aria-pressed="false">Pause animation</button></div></div><div class="room-footnote"><span>01 PHOTOGRAPH / 06 FRAMES</span><button class="text-link" data-photo="0">View original photograph ↗</button></div></div></section>`;
}

export function initRoom(){
 const stage=document.querySelector('#memory-room');
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let yaw=-20,pitch=-16,paused=motion.matches,drag=null,wasDragging=false;
 const button=document.querySelector('#room-motion');
 function update(){stage.style.setProperty('--yaw',`${yaw}deg`);stage.style.setProperty('--pitch',`${pitch}deg`);stage.dataset.motion=paused?'off':'on';button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Resume animation':'Pause animation';}
 function resize(){stage.style.setProperty('--room-scale',String(Math.min(stage.clientWidth/1240,stage.clientHeight/860,.82)));}
 new ResizeObserver(resize).observe(stage);
 function turn(amount){paused=true;yaw=Math.max(-42,Math.min(12,yaw+amount));update();}
 document.querySelector('#room-left').onclick=()=>turn(-8);
 document.querySelector('#room-right').onclick=()=>turn(8);
 document.querySelector('#room-reset').onclick=()=>{yaw=-20;pitch=-16;update();};
 button.onclick=()=>{paused=!paused;update();};
 stage.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;drag={x:e.clientX,y:e.clientY,yaw,pitch};wasDragging=false;});
 stage.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5){wasDragging=true;paused=true;stage.classList.add('dragging');yaw=Math.max(-42,Math.min(12,drag.yaw+dx*.12));pitch=Math.max(-28,Math.min(-8,drag.pitch-dy*.07));update();}});
 window.addEventListener('pointerup',()=>{drag=null;stage.classList.remove('dragging');});
 stage.addEventListener('click',e=>{if(wasDragging){e.preventDefault();e.stopImmediatePropagation();wasDragging=false;}},true);
 stage.addEventListener('keydown',e=>{if(e.target!==stage)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();turn(e.key==='ArrowLeft'?-8:8);}});
 motion.addEventListener('change',e=>{if(e.matches){paused=true;update();}});
 const visibility=new IntersectionObserver(entries=>{stage.classList.toggle('room-outside',!entries[0].isIntersecting);},{rootMargin:'150px'});visibility.observe(stage);
 resize();update();
}
