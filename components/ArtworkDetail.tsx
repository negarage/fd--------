import Image from "next/image";
import Link from "next/link";
import { artworks, series } from "@/lib/data";

export default function ArtworkDetail({ slug }: { slug: string }) {
  const artwork = artworks.find((art) => art.slug === slug);

  if (!artwork) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p>Работа не найдена.</p>
        <Link href="/works" className="text-sm underline">
          Вернуться к работам
        </Link>
      </div>
    );
  }

  const artSeries = series.find((s) => s.slug === artwork.series);
  const more = artworks
    .filter((art) => art.series === artwork.series && art.slug !== artwork.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href="/works"
        className="text-sm uppercase tracking-wide text-neutral-500 hover:text-neutral-900"
      >
        ← Все работы
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_380px]">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {artSeries?.title}
          </p>
          <h1 className="mt-3 font-serif text-3xl">{artwork.title}</h1>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between border-b border-neutral-200 pb-3">
              <dt className="text-neutral-500">Год</dt>
              <dd>{artwork.year}</dd>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-3">
              <dt className="text-neutral-500">Техника</dt>
              <dd>{artwork.medium}</dd>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-3">
              <dt className="text-neutral-500">Размер</dt>
              <dd>{artwork.size}</dd>
            </div>
          </dl>
          <p className="mt-8 leading-relaxed text-neutral-700">
            {artwork.description}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-neutral-900 px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-neutral-700"
          >
            Узнать о приобретении
          </Link>
        </div>
      </div>

      {more.length > 0 && (
        <div className="mt-24">
          <h2 className="font-serif text-2xl">Из этой же серии</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {more.map((art) => (
              <Link key={art.slug} href={`/works/${art.slug}`} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-medium">{art.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
