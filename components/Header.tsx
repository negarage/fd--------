"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/biography", label: "Биография" },
  { href: "/works", label: "Работы" },
  { href: "/exhibitions", label: "Выставки" },
  { href: "/news", label: "Новости" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.2em] uppercase text-neutral-900"
          onClick={() => setOpen(false)}
        >
          Анастасия Ленская
        </Link>

        <nav className="hidden gap-8 text-sm tracking-wide uppercase md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-neutral-900 ${
                  active ? "text-neutral-900" : "text-neutral-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-neutral-900" />
          <span className="h-px w-6 bg-neutral-900" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-neutral-200 bg-white px-6 py-4 text-sm uppercase tracking-wide md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-neutral-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
