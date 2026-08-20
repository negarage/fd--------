import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-neutral-900">
        <Image
          src="/images/lenskaya-hero.jpg"
          alt="Анастасия Ленская — картина"
          fill
          priority
          sizes="100vw"
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
              href="/portfolio"
              className="flex min-h-11 items-center border border-white px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-white hover:text-neutral-900"
            >
              Смотреть портфолио
            </Link>
            <Link
              href="/biography"
              className="flex min-h-11 items-center px-6 py-3 text-sm uppercase tracking-wide text-neutral-200 underline-offset-4 hover:underline"
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

      {/* Portfolio teaser */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">Портфолио</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Творческие проекты «Выгорание» и «Диалоги с городом» — с
            описанием, фотографиями работ и возможностью приобретения.
          </p>
          <Link
            href="/portfolio"
            className="mt-8 inline-flex min-h-11 items-center bg-neutral-900 px-8 py-3 text-sm uppercase tracking-wide text-white hover:bg-neutral-700"
          >
            Перейти к портфолио
          </Link>
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
          className="mt-8 inline-flex min-h-11 items-center bg-neutral-900 px-8 py-3 text-sm uppercase tracking-wide text-white hover:bg-neutral-700"
        >
          Связаться
        </Link>
      </section>
    </div>
  );
}
