import Image from "next/image";
import Link from "next/link";
import { artworks, series } from "@/lib/data";

export default function Home() {
  const featured = artworks.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-neutral-900">
        <Image
          src="/images/lenskaya-hero.jpg"
          alt="Анастасия Ленская — картина"

          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 text-white">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-neutral-300">
            Живопись · Санкт-Петербург
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
            Анастасия Ленская
          </h1>
          <p className="mt-6 max-w-xl text-neutral-200">
            Художница, работающая на стыке фигуративной живописи и тихого
            созерцания города, света и человека.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/works"
              className="border border-white px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-white hover:text-neutral-900"
            >
              Смотреть работы
            </Link>
            <Link
              href="/biography"
              className="px-6 py-3 text-sm uppercase tracking-wide text-neutral-200 underline-offset-4 hover:underline"
            >
              О художнице
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl">
          «Каждая картина — это диалог: с городом, с человеком, с самой собой»
        </h2>
        <p className="mt-6 text-neutral-600 leading-relaxed">
          Анастасия Ленская — современная российская художница, чьи работы
          находятся в частных коллекциях в России и за рубежом. В своей
          практике она соединяет классическую живописную технику с
          современным взглядом на городскую среду и внутренний мир человека.
        </p>
      </section>

      {/* Featured works */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-2xl sm:text-3xl">Избранные работы</h2>
          <Link
            href="/works"
            className="text-sm uppercase tracking-wide text-neutral-500 hover:text-neutral-900"
          >
            Все работы →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((art) => (
            <Link key={art.slug} href={`/works/${art.slug}`} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm font-medium">{art.title}</p>
              <p className="text-xs text-neutral-500">{art.year}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Series */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 font-serif text-2xl sm:text-3xl">Серии работ</h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {series.map((s) => (
              <Link
                key={s.slug}
                href={`/works?series=${s.slug}`}
                className="group border-b border-neutral-200 pb-8"
              >
                <h3 className="font-serif text-xl group-hover:text-neutral-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl">
          Приобрести картину или заказать портрет
        </h2>
        <p className="mt-4 text-neutral-600">
          Свяжитесь с художницей напрямую, чтобы обсудить покупку работы,
          индивидуальный заказ или участие в выставке.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-neutral-900 px-8 py-3 text-sm uppercase tracking-wide text-white hover:bg-neutral-700"
        >
          Связаться
        </Link>
      </section>
    </div>
  );
}
