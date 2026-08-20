import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио — Анастасия Ленская",
  description:
    "Портфолио художницы Анастасии Ленской: проекты «Выгорание» и «Диалоги с городом» — живопись с описанием и возможностью приобретения работ.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
