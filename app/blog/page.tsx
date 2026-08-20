import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Блог — Анастасия Ленская",
  description:
    "Заметки художницы Анастасии Ленской о творческом процессе, вдохновении и работе над картинами.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Блог</h1>
      <p className="mt-4 max-w-xl text-neutral-600">
        Заметки о творческом процессе, вдохновении и мыслях, которые
        сопровождают работу над картинами.
      </p>

      <div className="mt-14 space-y-12">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-neutral-200 pb-12 last:border-none"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              {post.date}
            </p>
            <h2 className="mt-3 font-serif text-2xl">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-neutral-600"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 flex min-h-11 w-fit items-center text-sm uppercase tracking-wide text-neutral-500 hover:text-neutral-900"
            >
              Читать →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

