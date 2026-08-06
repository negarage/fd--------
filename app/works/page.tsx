"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { artworks, series } from "@/lib/data";

function WorksContent() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("series") ?? "all";
  const [active, setActive] = useState(initial);

  const filtered =
    active === "all"
      ? artworks
      : artworks.filter((art) => art.series === active);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Работы</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Живопись Анастасии Ленской, сгруппированная по сериям. Выберите серию,
        чтобы посмотреть работы, или откройте картину, чтобы узнать о ней
        больше.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => setActive("all")}
          className={`border px-4 py-2 text-sm uppercase tracking-wide ${
            active === "all"
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-300 text-neutral-600 hover:border-neutral-900"
          }`}
        >
          Все работы
        </button>
        {series.map((s) => (
          <button
            key={s.slug}
            onClick={() => setActive(s.slug)}
            className={`border px-4 py-2 text-sm uppercase tracking-wide ${
              active === s.slug
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-900"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((art) => (
          <Link key={art.slug} href={`/works/${art.slug}`} className="group">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm font-medium">{art.title}</p>
            <p className="text-xs text-neutral-500">
              {art.year} · {art.medium}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function WorksPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-20">Загрузка…</div>}>
      <WorksContent />
    </Suspense>
  );
}
