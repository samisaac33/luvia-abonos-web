import type { Metadata } from "next";
import Link from "next/link";

import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { BiolAgenticTools } from "@/components/biol/BiolAgenticTools";
import { PageHero } from "@/components/ui/PageHero";
import { SectionImage } from "@/components/ui/SectionImage";
import { biolKnowledge } from "@/lib/biol-knowledge";
import { siteImages } from "@/lib/images";
import { SITE_NAME } from "@/lib/site";

const faqs = [
  {
    question: "¿Qué es el biol líquido o digestato?",
    answer:
      "El biol líquido es un fertilizante orgánico 100 % natural en formato líquido, obtenido por biodigestión anaerobia. Aporta nutrientes, materia orgánica soluble, microorganismos beneficiosos y ácidos húmicos y fúlvicos. Es útil como complemento del plan de fertirriego o aplicación al suelo según criterio técnico.",
  },
  {
    question: "¿Se puede usar en fertirriego?",
    answer:
      "Sí, mediante riego, fertirriego, aspersión o mochila. Conviene pruebas a pequeña escala y revisión de goteros, filtros y mezclas con otros productos antes de extender a toda la instalación.",
  },
  {
    question: "¿Biol líquido frente a abono sólido?",
    answer:
      "No compiten: se complementan. El sólido (gallinaza, compost) actúa con más énfasis en materia orgánica y efecto a medio plazo en el suelo; el líquido puede integrarse para aportes más rápidos o vía riego. La dosis global debe coordinarse con asesoramiento.",
  },
  {
    question: "¿Cuáles son las dosis recomendadas?",
    answer:
      "Dependen del cultivo. Por ejemplo: ornamentales 1 L biol + 10 L agua cada 7–10 días; banano 1,5–2 L + 8–10 L agua por planta cada 15 días; maíz 80–120 L/ha diluidos en 200–400 L de agua. Consulta la tabla de dosis en esta página o contacta para asesoramiento personalizado.",
  },
  {
    question: "¿Cómo solicitar biol o digestato?",
    answer:
      `Contacta con ${SITE_NAME} mediante el formulario web o WhatsApp. Indica cultivo, superficie y sistema de aplicación para orientarte sobre formatos y documentación.`,
  },
];

export const metadata: Metadata = {
  title: "Biol líquido orgánico biofermentado (20 L)",
  description:
    "Biol líquido orgánico biofermentado para banano, cacao, café, maíz y ornamentales. Composición, dosis por cultivo y preguntas frecuentes.",
  keywords: [
    "biol líquido",
    "fertilizante orgánico líquido",
    "biofermentado",
    "fertirriego orgánico",
    "digestato agrícola",
  ],
  alternates: {
    canonical: "/productos/biol-liquido",
  },
  openGraph: {
    title: `Biol líquido | ${SITE_NAME}`,
    description:
      "Fertilizante líquido orgánico biofermentado para integrar en planes de nutrición del cultivo.",
  },
};

export default function BiolLiquidoSeoPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        src={siteImages.hero.biolLiquido}
        alt="Plantación agrícola con sistema de riego"
      >
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
            Nutrición · formato líquido · {biolKnowledge.presentation}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Biol líquido orgánico biofermentado
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Fertilizante líquido{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              100 % orgánico
            </strong>{" "}
            por biodigestión anaerobia. Ideal para banano, cacao, café, maíz y
            ornamentales.
          </p>
        </header>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionImage
          src={siteImages.products["biol-porcino"]}
          alt="Bidones de fertilizante líquido orgánico en campo"
          className="mb-12"
        />

        <section className="space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Composición destacada
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              ["Nitrógeno total", biolKnowledge.composition.nitrogen],
              ["Fósforo", biolKnowledge.composition.phosphorus],
              ["Potasio", biolKnowledge.composition.potassium],
              ["pH", biolKnowledge.composition.ph],
              ["Conductividad", biolKnowledge.composition.conductivity],
              ["Materia orgánica", biolKnowledge.composition.organicMatter],
            ].map(([label, value]) => (
              <li
                key={label}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm"
              >
                <span className="font-medium text-[var(--foreground)]">
                  {label}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Beneficios principales
          </h2>
          <ul className="list-inside list-disc space-y-2">
            {biolKnowledge.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <BiolAgenticTools />

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Dosis recomendadas por cultivo
          </h2>
          <p className="text-sm">{biolKnowledge.disclaimer}</p>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="bg-[var(--card)]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
                    Cultivo
                  </th>
                  <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
                    Mezcla
                  </th>
                  <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
                    Frecuencia
                  </th>
                </tr>
              </thead>
              <tbody>
                {biolKnowledge.dosages.map((d) => (
                  <tr
                    key={d.crop}
                    className="border-t border-[var(--border)]"
                  >
                    <td className="px-4 py-3 align-top font-medium text-[var(--foreground)]">
                      {d.crop}
                    </td>
                    <td className="px-4 py-3 align-top">{d.mixture}</td>
                    <td className="px-4 py-3 align-top">{d.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Modo de aplicación
          </h2>
          <p>
            {biolKnowledge.applicationMethods.join(" · ")}. Producto 100 %
            natural y seguro.
          </p>
          <p>
            Consulta la ficha completa en el{" "}
            <Link
              href="/productos#biol-porcino"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              catálogo de productos
            </Link>{" "}
            o combínalo con{" "}
            <Link
              href="/productos/gallinaza"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              materiales sólidos
            </Link>{" "}
            dentro de un{" "}
            <Link
              href="/productos/abono-organico"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              plan de abono orgánico
            </Link>
            .
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Preguntas frecuentes
          </h2>
          <ul className="mt-6 space-y-6">
            {faqs.map((f) => (
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
