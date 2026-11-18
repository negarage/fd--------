import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
export const metadata: Metadata = { title: 'Анастасия Ленская — художница', description: 'Живопись, человек и город. Избранные работы Анастасии Ленской.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ru" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('lenskaya-theme')||'light'}catch{}` }} />{children}</body></html>; }
