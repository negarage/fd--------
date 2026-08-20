import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Анастасия Ленская",
  description:
    "Свяжитесь с художницей Анастасией Ленской по вопросам приобретения картин, заказа портретов и сотрудничества.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Контакты</h1>
      <p className="mt-4 max-w-xl text-neutral-600">
        По вопросам приобретения картин, заказа портретов, участия в
        выставках или сотрудничества — свяжитесь любым удобным способом.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-14 sm:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Email
            </h2>
            <a
              href="mailto:info@lenskaya-art.ru"
              className="mt-2 flex min-h-11 items-center text-lg hover:text-neutral-600"
            >
              info@lenskaya-art.ru
            </a>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Телефон
            </h2>
            <a
              href="tel:+79990000000"
              className="mt-2 flex min-h-11 items-center text-lg hover:text-neutral-600"
            >
              +7 (999) 000-00-00
            </a>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Мастерская
            </h2>
            <p className="mt-2 text-lg">Санкт-Петербург, Россия</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Соцсети
            </h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-lg">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center hover:text-neutral-600"
              >
                Instagram
              </a>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center hover:text-neutral-600"
              >
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-500">
              Имя
            </label>
            <input
              type="text"
              name="name"
              className="mt-2 min-h-11 w-full border-b border-neutral-300 bg-transparent py-2 outline-none focus:border-neutral-900"
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-2 min-h-11 w-full border-b border-neutral-300 bg-transparent py-2 outline-none focus:border-neutral-900"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-500">
              Сообщение
            </label>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 outline-none focus:border-neutral-900"
              placeholder="Расскажите, что вас интересует"
            />
          </div>
          <button
            type="submit"
            className="mt-4 flex min-h-11 items-center bg-neutral-900 px-8 py-3 text-sm uppercase tracking-wide text-white hover:bg-neutral-700"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
