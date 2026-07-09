import type { Metadata } from "next";
import Link from "next/link";

import { ProductPresentationsTable } from "@/components/products/ProductPresentationsTable";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { PageArticle } from "@/components/ui/PageContainer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionImage } from "@/components/ui/SectionImage";
import { gallinazaFaqs, gallinazaPresentations } from "@/lib/gallinaza-knowledge";
import { siteImages } from "@/lib/images";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallinaza sólida semi compostada para el campo",
  description:
    "Gallinaza sólida semi compostada: abono orgánico para mejorar suelo y cultivos. Presentaciones, precios orientativos y enlace al catálogo.",
  keywords: [
    "gallinaza",
    "gallinaza semi compostada",
    "abono orgánico sólido",
    "fertilizante orgánico",
  ],
  alternates: {
    canonical: "/productos/gallinaza",
  },
  openGraph: {
    title: `Gallinaza semi compostada | ${SITE_NAME}`,
    description:
      "Abono orgánico sólido con gallinaza estabilizada para profesionales del campo.",
  },
};

export default function GallinazaSeoPage() {
  return (
    <>
      <FaqJsonLd items={[...gallinazaFaqs]} />
      <PageHero
        src={siteImages.hero.gallinaza}
        alt="Invernadero con plantas y suelo enriquecido"
      >
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
            Abono orgánico · formato sólido
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Gallinaza sólida semi compostada para agricultura profesional
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            La gallinaza bien tratada es una de las fuentes más eficientes de{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              materia orgánica y nutrientes
            </strong>{" "}
            para integrar en planes de fertilización sostenible.
          </p>
        </header>
      </PageHero>

      <PageArticle>
        <SectionImage
          src={siteImages.products["gallinaza-semi-compostada"]}
          alt="Gallinaza sólida semi compostada para aplicación agrícola"
          className="mb-12"
        />

        <section className="space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Por qué encaja en tu sistema de fertilización
          </h2>
          <p>
            Los suelos con buena materia orgánica mantienen mejor la estructura,
            favorecen la actividad biológica y pueden liberar nutrientes de
            forma más equilibrada. La gallinaza sólida semi compostada permite
            incorporar ese aporte en{" "}
            <Link
              href="/productos/abono-organico"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              estrategias de abono orgánico
            </Link>{" "}
            combinadas con el resto de insumos del cultivo.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Presentaciones y precios
          </h2>
          <p>
            La gallinaza se comercializa en distintos formatos según el volumen de
            tu operación. Los precios son orientativos; confirma disponibilidad y
            condiciones de entrega con nosotros.
          </p>
          <ProductPresentationsTable
            presentations={gallinazaPresentations}
            caption="Presentaciones y precios de la gallinaza sólida semi compostada"
            sizeColumnLabel="Peso"
          />
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Producto en catálogo
          </h2>
          <p>
            Consulta la ficha completa de la{" "}
            <Link
              href="/productos#gallinaza-semi-compostada"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              gallinaza sólida semi compostada
            </Link>{" "}
            con formato, beneficios orientativos y uso sugerido. Si tu interés es{" "}
            <Link
              href="/productos/biol-liquido"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              nutrimento en formato líquido (biol / digestato)
            </Link>
            , también disponemos de opciones complementarias.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Preguntas frecuentes
          </h2>
          <ul className="mt-6 space-y-6">
            {gallinazaFaqs.map((faq) => (
              <li key={faq.question}>
                <p className="font-medium text-[var(--foreground)]">
                  {faq.question}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12">
          <Link
            href="/contacto"
            className="inline-flex rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
          >
            Solicitar información sobre gallinaza
          </Link>
        </p>
      </PageArticle>
    </>
  );
}
