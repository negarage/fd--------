export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Анастасия Ленская. Все права защищены.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900"
          >
            Instagram
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900"
          >
            ВКонтакте
          </a>
          <a href="mailto:info@lenskaya-art.ru" className="hover:text-neutral-900">
            info@lenskaya-art.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
