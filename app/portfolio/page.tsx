"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type PortfolioWork = {

  slug: string;
  title: string;
  image: string;
  year: string;
  medium: string;
  size: string;
  price: string;
};

type PortfolioProject = {
  slug: string;
  title: string;
  description: string[];
  works: PortfolioWork[];
};

const projects: PortfolioProject[] = [
  {
    slug: "vygoranie",
    title: "Выгорание",
    description: [
      "Работы раскрывают тему эскапизма как пространство между прошлым и будущим. Пережитый в прошлом опыт может оказаться настолько травмирующим, что мы останавливаемся.",
      "Эта остановка для меня — море, которое не имеет берегов или даже становится частью всего интерьера. Успокаивающая, убаюкивающая равномерным тактом волн вода даёт возможность передышки.",
      "Я поджигаю свои работы, чтобы показать, что какой бы прекрасной ни была эта идиллия классического образа, реальная жизнь напоминает о себе — и последствия её игнорирования могут быть ещё более травмирующими, чем опыт прошлого.",
    ],
    works: [
      {
        slug: "vygoranie-1",
        title: "Выгорание №1",
        image: "/images/lenskaya-vygoranie1.jpg",
        year: "2024",
        medium: "холст, смешанная техника",
        size: "60 × 80 см",
        price: "по запросу",
      },
      {
        slug: "vygoranie-2",
        title: "Выгорание №2",
        image: "/images/lenskaya-vygoranie2.jpg",
        year: "2024",
        medium: "холст, смешанная техника",
        size: "70 × 90 см",
        price: "по запросу",
      },
    ],
  },
  {
    slug: "dialogi-s-gorodom",
    title: "Диалоги с городом",
    description: [
      "Проект «Диалоги с городом» исследует жизнь города через диалоги его жителей с ним. В повседневных прогулках и путешествиях я замечаю фразы, высказывания, которые можно воспринять как знак или шутку. Для меня это то, как город, среда разговаривает с человеком.",
      "Социальные сети помогают нам сегодня вести бесконечные диалоги всех со всеми, и я использую этот инструмент. В своём аккаунте я предлагала прокомментировать ту фразу, которую увидела, своим друзьям. Из ответов я собирала коллаж — диалог.",
      "Проект обращается к структуре языка и коммуникации. Может ли город вести диалог с человеком? Может ли житель ему ответить? Вместе такие диалоги формируют ткань нашей культуры. С одной стороны, это беседы о незначительном, с другой — отражение идей и настроений, которые образуют наше коллективное сознание.",
    ],
    works: [
      {
        slug: "dialogi-5",
        title: "Диалоги с городом №5",
        image: "/images/lenskaya-dialogi-proekt5.jpg",
        year: "2023",
        medium: "коллаж, смешанная техника",
        size: "по запросу",
        price: "по запросу",
      },
      {
        slug: "dialogi-8",
        title: "Диалоги с городом №8",
        image: "/images/lenskaya-dialogi-proekt8.jpg",
        year: "2023",
        medium: "коллаж, смешанная техника",
        size: "по запросу",
        price: "по запросу",
      },
    ],
  },
];

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState<{
    project: PortfolioProject;
    work: PortfolioWork;
  } | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-center font-serif text-4xl sm:text-5xl">
        Портфолио
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
        Творческие проекты Анастасии Ленской — с описанием, фотографиями работ
        и возможностью приобретения.
      </p>

      <div className="mt-20 space-y-24">
        {projects.map((project) => (
          <section key={project.slug}>
            <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400">
              Проект
            </p>
            <h2 className="mt-3 text-center font-serif text-3xl sm:text-4xl">
              {project.title}
            </h2>

            <div className="mx-auto mt-6 max-w-3xl space-y-5 text-center text-neutral-600 leading-relaxed">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {project.works.map((work) => (
                <div key={work.slug}>
                  <button
                    type="button"
                    onClick={() => setLightbox({ project, work })}
                    className="relative flex h-[520px] w-full cursor-zoom-in items-center justify-center overflow-hidden bg-neutral-100"
                    aria-label={`Увеличить: ${work.title}`}
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </button>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">{work.title}</p>
                      <p className="text-xs text-neutral-500">
                        {work.year} · {work.medium}
                        {work.size !== "по запросу" ? ` · ${work.size}` : ""}
                      </p>
                      <p className="mt-2 text-sm font-medium text-neutral-900">
                        {work.price}
                      </p>
                    </div>
                    <Link
                      href={`/contact?work=${encodeURIComponent(work.title)}`}
                      className="flex min-h-11 shrink-0 items-center bg-neutral-900 px-5 py-2.5 text-xs uppercase tracking-wide text-white hover:bg-neutral-700"
                    >
                      Купить
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center text-sm uppercase tracking-wide text-neutral-500 hover:text-neutral-900"
        >
          Остались вопросы? Свяжитесь со мной →
        </Link>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-2xl text-white hover:text-neutral-300 sm:right-8 sm:top-8"
          >
            ×
          </button>
          <div
            className="grid max-h-full w-full max-w-6xl grid-cols-1 gap-8 overflow-y-auto lg:grid-cols-[1.2fr_1fr] lg:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[50vh] w-full lg:h-[85vh]">
              <Image
                src={lightbox.work.image}
                alt={lightbox.work.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="max-h-[85vh] overflow-y-auto bg-white p-6 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Проект
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                {lightbox.project.title}
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
                {lightbox.project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <p className="text-sm font-medium">{lightbox.work.title}</p>
                <p className="mt-1 text-xs text-neutral-500">
                  {lightbox.work.year} · {lightbox.work.medium}
                  {lightbox.work.size !== "по запросу"
                    ? ` · ${lightbox.work.size}`
                    : ""}
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {lightbox.work.price}
                </p>
                <Link
                  href={`/contact?work=${encodeURIComponent(
                    lightbox.work.title
                  )}`}
                  className="mt-6 inline-flex min-h-11 items-center bg-neutral-900 px-6 py-3 text-xs uppercase tracking-wide text-white hover:bg-neutral-700"
                >
                  Купить
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



