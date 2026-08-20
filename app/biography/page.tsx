import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Биография — Анастасия Ленская",
  description: "Биография художницы Анастасии Ленской, образование и практика.",
};

export default function BiographyPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl">Биография</h1>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/images/lenskaya-portrait.jpg"
              alt="Анастасия Ленская"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>

          <div className="space-y-6 leading-relaxed text-neutral-700">
            <p>
              Анастасия Ленская родилась в Санкт-Петербурге. С детства увлекалась
              рисованием, а формальное художественное образование получила в
              одном из ведущих художественных училищ России, где освоила
              классическую академическую живописную школу — рисунок,
              композицию и работу с цветом.
            </p>
            <p>
              После завершения обучения Анастасия продолжила развивать
              собственный живописный язык, соединяя строгую академическую
              основу с современным взглядом на городскую среду, свет и
              внутренние состояния человека. Ключевой темой её творчества
              стал диалог между человеком и городом — улицы, окна и
              отражения становятся метафорой внутренней жизни персонажей.
            </p>
            <p>
              Работы художницы выполнены преимущественно в технике масляной
              живописи на холсте, хотя в последние годы она также обращается
              к акрилу и смешанным техникам. Картины Анастасии находятся в
              частных коллекциях в России, Европе и США.
            </p>
            <p>
              С 2021 года Анастасия регулярно участвует в групповых и
              персональных выставках в Москве и Санкт-Петербурге, а также
              сотрудничает с онлайн-платформами современного искусства.
            </p>

            <div className="grid grid-cols-1 gap-8 border-t border-neutral-200 pt-8 sm:grid-cols-2">
              <div>
                <h2 className="font-serif text-lg">Образование</h2>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  <li>Художественное училище, отделение живописи</li>
                  <li>Курсы академического рисунка и композиции</li>
                  <li>Мастер-классы по масляной живописи</li>
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-lg">Техники</h2>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  <li>Масляная живопись на холсте</li>
                  <li>Акрил</li>
                  <li>Смешанная техника</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">Философия творчества</h2>
          <p className="mt-6 leading-relaxed text-neutral-600">
            «Я стремлюсь не изображать реальность буквально, а находить в
            обыденном — тишине улицы, свете из окна, взгляде человека —
            эмоциональную точку, которая объединяет зрителя и картину в общем
            переживании».
          </p>
        </div>
      </section>
    </div>
  );
}
