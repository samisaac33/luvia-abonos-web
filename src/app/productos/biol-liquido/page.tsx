import type { Metadata } from "next";
import Link from "next/link";

import { BiolAgenticTools } from "@/components/biol/BiolAgenticTools";
import { ProductPresentationsTable } from "@/components/products/ProductPresentationsTable";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionImage } from "@/components/ui/SectionImage";
import { biolFaqs, biolPresentations } from "@/lib/biol-knowledge";
import { siteImages } from "@/lib/images";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Biol líquido y digestato para riego y suelo",
  description:
    "Biol líquido y digestato de biodigestión para agricultura: uso en fertirriego y suelo, preguntas frecuentes y producto en catálogo.",
  keywords: [
    "biol líquido",
    "digestato agrícola",
    "fertilizante orgánico líquido",
    "fertirriego orgánico",
  ],
  alternates: {
    canonical: "/productos/biol-liquido",
  },
  openGraph: {
    title: `Biol líquido | ${SITE_NAME}`,
    description:
      "Digestato y biol para integrar en planes de nutrición del cultivo.",
  },
};

export default function BiolLiquidoSeoPage() {
  return (
    <>
      <FaqJsonLd items={[...biolFaqs]} />
      <PageHero
        src={siteImages.hero.biolLiquido}
        alt="Plantación agrícola con sistema de riego"
      >
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
            Nutrición · formato líquido
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Biol líquido y digestato para cultivos exigentes
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            El formato líquido permite integrar{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              nutrientes y materia orgánica soluble o en suspensión
            </strong>{" "}
            en sistemas de riego y en aplicaciones al suelo cuando procede.
          </p>
        </header>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionImage
          src={siteImages.products["biol-liquido"]}
          alt="Biol líquido y digestato para aplicación agrícola"
          className="mb-12"
        />

        <section className="space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Cuándo tiene sentido en tu finca
          </h2>
          <p>
            Explotaciones con invernadero, frutales en regadío o cultivos donde
            el calendario aprieta suelen valorar productos que entran bien en
            circuito de agua o en pulverización al suelo. El digestato bien
            caracterizado es una pieza más dentro de un{" "}
            <Link
              href="/productos/abono-organico"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              plan de abono orgánico
            </Link>{" "}
            junto con{" "}
            <Link
              href="/productos/gallinaza"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              materiales sólidos
            </Link>{" "}
            que mejoran la base del suelo.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Presentaciones y precios
          </h2>
          <p>
            El biol líquido se comercializa en distintos formatos según el
            volumen de tu operación. Los precios son orientativos; confirma
            disponibilidad y condiciones de entrega con nosotros.
          </p>
          <ProductPresentationsTable
            presentations={biolPresentations}
            caption="Presentaciones y precios del biol líquido"
          />
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Producto en catálogo
          </h2>
          <p>
            Consulta la ficha completa del{" "}
            <Link
              href="/productos#biol-liquido"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              biol líquido por biodigestión anaerobia
            </Link>{" "}
            (origen porcino) con formato, beneficios orientativos y uso
            sugerido. La disponibilidad y fichas técnicas definitivas las
            confirmamos por canal comercial.
          </p>
        </section>

        <BiolAgenticTools />

        <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Preguntas frecuentes
          </h2>
          <ul className="mt-6 space-y-6">
            {biolFaqs.map((f) => (
              <li key={f.question}>
                <p className="font-medium text-[var(--foreground)]">
                  {f.question}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {f.answer}
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
            Consultar biol líquido
          </Link>
        </p>
      </article>
    </>
  );
}
