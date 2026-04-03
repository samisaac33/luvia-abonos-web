import type { Metadata } from "next";
import Link from "next/link";

import { products } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: `Catálogo de abonos orgánicos: estiércol de gallinas secado térmicamente, compost de gallinaza por volteo y biol líquido por biodigestión. ${SITE_DESCRIPTION}`,
  openGraph: {
    title: `Catálogo de productos | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export default function ProductosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Catálogo de productos
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Información técnica orientativa sobre nuestros fertilizantes orgánicos.
          Las dosis y el momento de aplicación deben ajustarse a tu suelo, cultivo
          y asesoramiento profesional.
        </p>
        <nav
          className="mt-6 flex flex-wrap gap-3 text-sm font-medium"
          aria-label="Guías por familia de producto"
        >
          <Link
            href="/productos/abono-organico"
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:bg-[var(--accent)]"
          >
            Abono orgánico
          </Link>
          <Link
            href="/productos/gallinaza"
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:bg-[var(--accent)]"
          >
            Gallinaza y compost
          </Link>
          <Link
            href="/productos/biol-liquido"
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:bg-[var(--accent)]"
          >
            Biol líquido
          </Link>
        </nav>
      </header>

      <ul className="mt-14 space-y-16">
        {products.map((product) => (
          <li
            key={product.id}
            id={product.id}
            className="scroll-mt-24 border-b border-[var(--border)] pb-16 last:border-0 last:pb-0"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
              {product.format}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              {product.name}
            </h2>
            <p className="mt-4 text-[var(--muted)]">{product.description}</p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  Beneficios
                </h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--muted)]">
                  {product.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  Uso sugerido
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {product.usage}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
              >
                Consultar disponibilidad
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
