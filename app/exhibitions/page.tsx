import type { Metadata } from "next";
import { exhibitions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Выставки — Анастасия Ленская",
  description: "Персональные и групповые выставки художницы Анастасии Ленской.",
};

export default function ExhibitionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Выставки</h1>
      <p className="mt-4 text-neutral-600">
        Хронология персональных и групповых выставок с участием работ
        Анастасии Ленской.
      </p>

      <div className="mt-14 space-y-0">
        {exhibitions.map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-2 border-t border-neutral-200 py-8 sm:grid-cols-[100px_1fr_auto]"
          >
            <span className="font-serif text-xl text-neutral-500">
              {ex.year}
            </span>
            <div>
              <h2 className="text-lg font-medium">{ex.title}</h2>
              <p className="mt-1 text-sm text-neutral-600">{ex.place}</p>
            </div>
            <span className="self-start text-xs uppercase tracking-wide text-neutral-400 sm:text-right">
              {ex.type}
            </span>
          </div>
        ))}
        <div className="border-t border-neutral-200" />
      </div>
    </div>
  );
}
