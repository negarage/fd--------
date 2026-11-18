'use client';
import { useEffect, useRef, useState } from 'react';
export function Header() {
 const [dark, setDark] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);
 const [menuClosing, setMenuClosing] = useState(false);
 const menuDialog = useRef<HTMLDialogElement>(null);
 const [slide, setSlide] = useState(0);
 useEffect(()=>{
  const update=(event:Event)=>setSlide((event as CustomEvent<number>).detail);
  window.addEventListener('lenskaya:slide-change',update);
  return ()=>window.removeEventListener('lenskaya:slide-change',update);
 },[]);
 const menuButton = useRef<HTMLButtonElement>(null);
 useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark'); }, []);
 useEffect(() => {
  if(menuOpen) menuDialog.current?.showModal();
 },[menuOpen]);
 function closeMenu(){if(menuOpen)setMenuClosing(true);}
 function toggle() { const value = !dark; setDark(value); document.documentElement.dataset.theme = value ? 'dark' : 'light'; try { localStorage.setItem('lenskaya-theme', value ? 'dark' : 'light'); } catch {} }
 const links = [{hash:'',title:'Главная'},{hash:'favorite',title:'Выгорание'},{hash:'works',title:'Работы'},{hash:'about',title:'О художнице'},{hash:'contact',title:'Контакт'}].map((item,index)=><a key={item.hash} href={'#'+item.hash} aria-current={slide===index?'page':undefined} onClick={closeMenu}>{item.title}</a>);
 return <header className="header"><a className="wordmark" href="#" aria-label="На главную" onClick={closeMenu}>АЛ<span className="brand-dot">.</span></a><nav className="desktop-nav" aria-label="Основная навигация">{links}</nav><div className="header-actions"><button className="theme-toggle" onClick={toggle} aria-label={dark ? 'Включить светлую тему' : 'Включить тёмную тему'} title={dark ? 'Светлая тема' : 'Тёмная тема'}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none"/></svg></button><button ref={menuButton} className="burger" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} aria-controls="touch-menu" onClick={()=>{setMenuClosing(false);setMenuOpen(true);}}><span/><span/></button></div><dialog ref={menuDialog} className="menu-drawer" data-closing={menuClosing} aria-label="Меню" onCancel={e=>{e.preventDefault();closeMenu();}} onAnimationEnd={e=>{if(e.target===e.currentTarget && menuClosing){menuDialog.current?.close();setMenuOpen(false);setMenuClosing(false);}}}><button className="drawer-close" aria-label="Закрыть меню" onClick={closeMenu}><svg aria-hidden="true" width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 7 18 18M25 7 7 25"/></svg></button><nav id="touch-menu" className="touch-menu" aria-label="Мобильная навигация">{links}</nav></dialog></header>;
}
