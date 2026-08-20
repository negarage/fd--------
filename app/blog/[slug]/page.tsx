import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="flex min-h-11 w-fit items-center text-sm uppercase tracking-wide text-neutral-500 hover:text-neutral-900"
      >
        ← Все записи
      </Link>

      <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
        {post.date}
      </p>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl">{post.title}</h1>
      <p className="mt-8 leading-relaxed text-neutral-700">{post.content}</p>
    </div>
  );
}

