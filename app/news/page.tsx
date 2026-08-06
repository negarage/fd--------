import type { Metadata } from "next";
import { news } from "@/lib/data";

export const metadata: Metadata = {
  title: "Новости — Анастасия Ленская",
  description: "Новости и события художницы Анастасии Ленской.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Новости</h1>
      <p className="mt-4 text-neutral-600">
        Последние события, выставки и публикации, связанные с творчеством
        Анастасии Ленской.
      </p>

      <div className="mt-14 divide-y divide-neutral-200">
        {news.map((item, i) => (
          <article key={i} className="py-10">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              {item.date}
            </p>
            <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-neutral-600">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
