import type { Metadata } from "next";
import Link from "next/link";

import { ProductPresentationsTable } from "@/components/products/ProductPresentationsTable";
import { PageHero } from "@/components/ui/PageHero";
import { ProductImage } from "@/components/ui/ProductImage";
import { biolPresentations } from "@/lib/biol-knowledge";
import { gallinazaPresentations } from "@/lib/gallinaza-knowledge";
import { siteImages } from "@/lib/images";
import { products } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

const productPresentationConfig = {
  "gallinaza-semi-compostada": {
    presentations: gallinazaPresentations,
    caption: "Presentaciones y precios de la gallinaza sólida semi compostada",
  },
  "biol-liquido": {
    presentations: biolPresentations,
    caption: "Presentaciones y precios del biol líquido",
  },
} as const;

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: `Catálogo de abonos orgánicos: gallinaza sólida semi compostada y biol líquido por biodigestión. ${SITE_DESCRIPTION}`,
  openGraph: {
    title: `Catálogo de productos | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export default function ProductosPage() {
  return (
    <>
      <PageHero
        src={siteImages.hero.productos}
        alt="Maquinaria agrícola trabajando en campo de cultivo"
      >
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
              Gallinaza semi compostada
            </Link>
            <Link
              href="/productos/biol-liquido"
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:bg-[var(--accent)]"
            >
              Biol líquido
            </Link>
          </nav>
        </header>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ul className="space-y-16">
          {products.map((product) => {
            const presentationConfig =
              productPresentationConfig[
                product.id as keyof typeof productPresentationConfig
              ];

            return (
              <li
                key={product.id}
                id={product.id}
                className="scroll-mt-24 border-b border-[var(--border)] pb-16 last:border-0 last:pb-0"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
                  <ProductImage
                    src={
                      siteImages.products[
                        product.id as keyof typeof siteImages.products
                      ]
                    }
                    alt={product.name}
                  />
                  <div>
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
                          {product.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
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

                    {presentationConfig && (
                      <div className="mt-8">
                        <h3 className="text-sm font-semibold text-[var(--foreground)]">
                          Presentaciones y precios
                        </h3>
                        <p className="mt-2 text-sm text-[var(--muted)]">
                          Precios orientativos en dólares estadounidenses.
                        </p>
                        <ProductPresentationsTable
                          presentations={presentationConfig.presentations}
                          caption={presentationConfig.caption}
                          className="mt-4"
                        />
                      </div>
                    )}

                    <div className="mt-8">
                      <Link
                        href="/contacto"
                        className="inline-flex rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
                      >
                        Consultar disponibilidad
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
