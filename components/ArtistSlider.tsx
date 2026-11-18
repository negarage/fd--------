'use client';
import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { Hero } from './Hero';
import { Gallery } from './Gallery';
import { About } from './About';
import { Footer } from './Footer';
const slides = ['Знакомство', 'Художница и работа', 'Работы', 'О художнице', 'Контакт'];
const hashes = ['', 'favorite', 'works', 'about', 'contact'];
export function ArtistSlider() {
 const track = useRef<HTMLDivElement>(null);
 const [active, setActive] = useState(0);
 const drag = useRef<{id:number;x:number;scroll:number;index:number;moved:boolean} | null>(null);
 const suppressClick = useRef(false);

 const animation = useRef<number | null>(null);
 const go = useCallback((index: number) => {
  const node = track.current;
  if (!node) return;
  if(animation.current!==null) cancelAnimationFrame(animation.current);
  const next = ((index % slides.length) + slides.length) % slides.length;
  const start=node.scrollLeft, target=next*node.clientWidth;
  history.replaceState(null, '', `${location.pathname}${location.search}${hashes[next] ? '#'+hashes[next] : ''}`);
  node.dataset.settling='true';
  // Select the destination immediately; position continues animating independently.
  setActive(next);
  window.dispatchEvent(new CustomEvent('lenskaya:slide-change',{detail:next}));
  const complete=()=>{
   node.scrollLeft=target;
   animation.current=null;
   delete node.dataset.settling;
  };
  if(matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(target-start)<1){complete();return;}
  const duration=Math.min(780,Math.max(420,Math.abs(target-start)*.65));
  const started=performance.now();
  const tick=(now:number)=>{
   const progress=Math.min(1,(now-started)/duration);
   node.scrollLeft=start+(target-start)*(1-Math.pow(1-progress,4));
   if(progress<1)animation.current=requestAnimationFrame(tick);else complete();
  };
  animation.current=requestAnimationFrame(tick);
 }, []);
 useEffect(()=>{window.dispatchEvent(new CustomEvent('lenskaya:slide-change',{detail:active}));},[active]);
 const finishDrag = (event: PointerEvent<HTMLDivElement>, cancelled = false) => {
  const gesture=drag.current, node=event.currentTarget;
  if(!gesture || event.pointerId!==gesture.id)return;
  drag.current=null;
  // Keep snapping disabled until the release animation has reached its destination.
  node.dataset.settling='true';
  delete node.dataset.dragging;
  if(node.hasPointerCapture(gesture.id))node.releasePointerCapture(gesture.id);
  if(!gesture.moved){go(gesture.index);return;}
  const distance=event.clientX-gesture.x;
  const threshold=Math.min(100,node.clientWidth*.16);
  go(gesture.index+(!cancelled && Math.abs(distance)>threshold ? (distance<0?1:-1):0));
 };
 useEffect(() => {
  const navigate = () => { const index = hashes.indexOf(location.hash.slice(1)); if (index >= 0) go(index); };
  const onClick = (event: MouseEvent) => {
   const link = (event.target as Element).closest('a[href^="#"]');
   if (!link) return;
   const hash = link.getAttribute('href')!.slice(1), index = hashes.indexOf(hash);
   if (index < 0) return;
   event.preventDefault(); history.replaceState(null, '', `${location.pathname}${location.search}${hash ? '#'+hash : ''}`); go(index);
  };
  navigate(); window.addEventListener('hashchange', navigate); document.addEventListener('click', onClick);
  let width=track.current?.clientWidth;
  const resize = new ResizeObserver(() => {
   const node=track.current;if(!node || node.clientWidth===width)return;
   width=node.clientWidth;
   if(animation.current!==null){cancelAnimationFrame(animation.current);animation.current=null;}
   drag.current=null;delete node.dataset.dragging;delete node.dataset.settling;
   node.scrollTo({left:Number(node.dataset.active || 0)*node.clientWidth,behavior:'instant'});
  });
  if(track.current) resize.observe(track.current);
  return () => {window.removeEventListener('hashchange',navigate);document.removeEventListener('click',onClick);resize.disconnect();if(animation.current!==null)cancelAnimationFrame(animation.current);};
 }, [go]);
 return <main className="slider-shell"><div ref={track} data-active={active} className="slide-track" tabIndex={0}
 onPointerDown={event=>{
  if(document.querySelector('dialog[open]'))return;
  if(event.pointerType!=='mouse'||event.button!==0)return;
  suppressClick.current=false;
  const node=event.currentTarget;
  if(animation.current!==null){cancelAnimationFrame(animation.current);animation.current=null;}
  drag.current={id:event.pointerId,x:event.clientX,scroll:node.scrollLeft,index:Math.round(node.scrollLeft/node.clientWidth),moved:false};
 }}
 onPointerMove={event=>{
  const gesture=drag.current,node=event.currentTarget;
  if(!gesture||gesture.id!==event.pointerId)return;
  const distance=event.clientX-gesture.x;
  if(!gesture.moved && Math.abs(distance)<6)return;
  if(!gesture.moved){gesture.moved=true;suppressClick.current=true;node.dataset.dragging='true';node.setPointerCapture(event.pointerId);}
  event.preventDefault();node.scrollLeft=gesture.scroll-distance;
 }}
 onPointerUp={event=>finishDrag(event)}
 onPointerCancel={event=>finishDrag(event,true)}
 onLostPointerCapture={event=>finishDrag(event,true)}
 onPointerLeave={event=>{if(drag.current && !drag.current.moved)finishDrag(event,true);}}
 onDragStart={event=>event.preventDefault()}
 onClickCapture={event=>{if(suppressClick.current){event.preventDefault();event.stopPropagation();suppressClick.current=false;}}} aria-label="Слайды сайта Анастасии Ленской" aria-roledescription="карусель" onKeyDown={e=>{if(e.target!==e.currentTarget || document.querySelector('dialog[open]'))return; if(e.key==='ArrowRight'){e.preventDefault();go(active+1);}if(e.key==='ArrowLeft'){e.preventDefault();go(active-1);}}} onScroll={()=>{const node=track.current;if(node && !drag.current && node.dataset.settling!=='true')setActive(Math.round(node.scrollLeft/node.clientWidth));}}>
 <div className="site-slide intro-slide" role="group" aria-label="1 из 5 — Знакомство" inert={active!==0}><Hero/></div>
 <div className="site-slide favorite-slide" role="group" aria-label="2 из 5 — Художница и работа" inert={active!==1}>
  <section className="artist-diptych" aria-labelledby="diptych-title"><div className="diptych-heading"><h2 id="diptych-title">Выгорание №1</h2><span className="diptych-index" aria-hidden="true">02</span></div>
  <div className="diptych-images"><figure className="diptych-portrait"><div className="diptych-image"><img src="/images/anastasia.webp" alt="Анастасия Ленская держит лицо руками" width="720" height="668"/></div></figure><figure className="diptych-art"><div className="diptych-image"><img src="/images/lenskaya-vygoranie1.jpg" alt="Картина «Выгорание №1»"/></div><figcaption><strong>Выгорание №1</strong><span>2024 / 60 × 80 см</span></figcaption></figure></div>
  </section>
 </div>
 <div className="site-slide" role="group" aria-label="3 из 5 — Работы" inert={active!==2}><Gallery/></div>
 <div className="site-slide" role="group" aria-label="4 из 5 — О художнице" inert={active!==3}><About/></div>
 <div className="site-slide" role="group" aria-label="5 из 5 — Контакт" inert={active!==4}><Footer/></div>
 </div><div className="slide-controls"><span className="slide-counter" aria-live="polite">{String(active+1).padStart(2,'0')} <span>/ 05</span></span><div className="slide-tabs" aria-label="Выбрать слайд">{slides.map((title,i)=><button key={title} aria-label={`${i+1}. ${title}`} aria-current={active===i?'step':undefined} onClick={()=>go(i)}><span/></button>)}</div><div className="slide-arrows"><button aria-label="Предыдущий слайд" onClick={()=>go(active-1)}>←</button><button aria-label="Следующий слайд" onClick={()=>go(active+1)}>→</button></div></div></main>;
}
