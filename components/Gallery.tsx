'use client';
import { useEffect, useRef, useState } from 'react';
const works = [
 { title: 'Выгорание №1', image: 'lenskaya-vygoranie1.jpg', info: '2024 · Холст, смешанная техника · 60 × 80 см', series: 'Выгорание' },
 { title: 'Выгорание №2', image: 'lenskaya-vygoranie2.jpg', info: '2024 · Холст, смешанная техника · 70 × 90 см', series: 'Выгорание' },
 { title: 'Диалоги с городом №5', image: 'lenskaya-dialogi-proekt5.jpg', info: '2023 · Коллаж, смешанная техника', series: 'Диалоги с городом' },
 { title: 'Диалоги с городом №8', image: 'lenskaya-dialogi-proekt8.jpg', info: '2023 · Коллаж, смешанная техника', series: 'Диалоги с городом' },
];
export function Gallery() {
 const [liked, setLiked] = useState<string[]>([]);
 useEffect(() => {
  try {
   const saved: unknown = JSON.parse(localStorage.getItem('lenskaya-liked-works') || '[]');
   if (Array.isArray(saved)) setLiked(saved.filter((id): id is string => typeof id === 'string' && works.some(w => w.image === id)));
  } catch {}
 }, []);
 function toggleLike(id: string) {
  const next = liked.includes(id) ? liked.filter(value => value !== id) : [...liked, id];
  setLiked(next);
  try { localStorage.setItem('lenskaya-liked-works', JSON.stringify(next)); } catch {}
 }
 const [closing, setClosing] = useState(false);
 const [filter, setFilter] = useState('Все'); const [selected,setSelected] = useState(works[0]); const dialog = useRef<HTMLDialogElement>(null);
 return <section className="works section-pad" id="works"><div className="section-heading"><h2>Избранные работы</h2><span className="work-count">2023 — 2024</span></div><div className="filters" aria-label="Серии работ">{['Все','Выгорание','Диалоги с городом'].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="gallery">{works.filter(w=>filter==='Все'||w.series===filter).map((w)=><article className="artwork-card" key={w.image}><button className="artwork" onClick={()=>{setSelected(w);setClosing(false);dialog.current?.showModal();}}><div className="artwork-image"><img src={'/images/'+w.image} alt={w.title} loading="lazy"/><span className="artwork-open" aria-hidden="true">↗</span></div><div className="artwork-caption"><h3>{w.title}</h3><span>↗</span><p>{w.info}</p></div></button></article>)}</div><dialog ref={dialog} className="art-dialog art-drawer" data-closing={closing} aria-labelledby="art-detail-title" onCancel={e=>{e.preventDefault();setClosing(true);}} onAnimationEnd={e=>{if(e.target===e.currentTarget && closing){dialog.current?.close();setClosing(false);}}}><button className="artwork-like detail-like" aria-label={(liked.includes(selected.image) ? 'Убрать лайк: ' : 'Нравится: ') + selected.title} aria-pressed={liked.includes(selected.image)} onClick={()=>toggleLike(selected.image)}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg></button><button className="drawer-close" onClick={()=>setClosing(true)} aria-label="Закрыть картину"><svg aria-hidden="true" width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 7 18 18M25 7 7 25"/></svg></button><div className="art-detail-media"><div className="art-detail-image"><img src={'/images/'+selected.image} alt={selected.title}/></div></div><div className="art-detail-copy"><h3 id="art-detail-title">{selected.title}</h3><p>{selected.info}</p></div><a className="contact-cta detail-contact-cta" href="https://t.me/alenskaya" target="_blank" rel="noopener noreferrer">Обсудить картину в Telegram <span aria-hidden="true">↗</span></a></dialog></section>;
}
