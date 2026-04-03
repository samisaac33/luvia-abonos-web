import type { Metadata } from "next";
import Link from "next/link";

import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE_NAME } from "@/lib/site";

const faqs = [
  {
    question: "¿Qué es el biol líquido o digestato?",
    answer:
      "El biol líquido suele referirse a fertilizantes orgánicos o orgánico-minerales en forma líquida. En nuestro catálogo, el digestato procede de biodigestión anaerobia de residuos valorizados: aporta nutrientes y fracción orgánica en suspensión o disuelta, útil como complemento del plan de fertirriego o aplicación al suelo según criterio técnico.",
  },
  {
    question: "¿Se puede usar en fertirriego?",
    answer:
      "Depende de la calidad del producto, filtración, compatibilidad con el sistema y recomendación técnica. Conviene pruebas a pequeña escala y revisión de goteros, filtros y mezclas con otros productos antes de extender a toda la instalación.",
  },
  {
    question: "¿Biol líquido frente a abono sólido?",
    answer:
      "No compiten: se complementan. El sólido (gallinaza, compost) actúa con más énfasis en materia orgánica y efecto a medio plazo en el suelo; el líquido puede integrarse para aportes más rápidos o vía riego. La dosis global debe coordinarse con asesoramiento.",
  },
  {
    question: "¿Cómo solicitar biol o digestato?",
    answer:
      `Contacta con ${SITE_NAME} mediante el formulario web o WhatsApp. Indica cultivo, superficie y sistema de aplicación para orientarte sobre formatos y documentación.`,
  },
];

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
      <FaqJsonLd items={faqs} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header>
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

        <section className="mt-12 space-y-4 text-[var(--muted)]">
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
            Producto en catálogo
          </h2>
          <p>
            Consulta la ficha completa del{" "}
            <Link
              href="/productos#biol-porcino"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              biol líquido por biodigestión anaerobia
            </Link>{" "}
            (origen porcino) con formato, beneficios orientativos y uso
            sugerido. La disponibilidad y fichas técnicas definitivas las
            confirmamos por canal comercial.
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
