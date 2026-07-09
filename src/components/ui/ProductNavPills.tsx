import Link from "next/link";

import { cn } from "@/lib/utils";

type ProductNavPillsProps = {
  className?: string;
};

const productLinks = [
  {
    href: "/productos/gallinaza",
    label: "Gallinaza semi compostada",
  },
  {
    href: "/productos/biol-liquido",
    label: "Biol líquido",
  },
] as const;

const pillClass =
  "inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)] sm:w-auto";

export function ProductNavPills({ className }: ProductNavPillsProps) {
  return (
    <nav
      className={cn("mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3", className)}
      aria-label="Guías por producto"
    >
      {productLinks.map((link) => (
        <Link key={link.href} href={link.href} className={pillClass}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
