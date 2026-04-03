import type { Metadata } from "next";
import Link from "next/link";

import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE_NAME } from "@/lib/site";

const faqs = [
  {
    question: "¿Qué es la gallinaza y para qué sirve en agricultura?",
    answer:
      "La gallinaza es un residuo rico en materia orgánica y nutrientes procedente de la cría avícola. Tratada (secado, compostaje u otros procesos), se usa como abono orgánico para mejorar la estructura del suelo, la retención de agua y el aporte progresivo de nutrientes al cultivo.",
  },
  {
    question: "¿Gallinaza compostada o estiércol secado térmicamente?",
    answer:
      "Ambas opciones aportan materia orgánica; la compostación estabiliza y homogeniza el material mediante procesos aeróbicos, mientras que el secado térmico reduce humedad y puede facilitar almacenamiento y manejo. La elección depende del sistema productivo, logística y asesoramiento agronómico.",
  },
  {
    question: "¿Cómo se calcula la dosis de gallinaza?",
    answer:
      "La dosis debe basarse en análisis de suelo, objetivos de cultivo, textura y programa de fertilización. Siempre conviene asesoramiento técnico para evitar déficits o excesos y adaptar la aplicación al momento fenológico y al sistema de labor.",
  },
  {
    question: "¿Dónde comprar gallinaza o compost de gallinaza?",
    answer:
      `En ${SITE_NAME} comercializamos formatos sólidos derivados de gallinaza con procesos controlados. Consulta disponibilidad, envíos y fichas técnicas en el catálogo o a través del formulario de contacto.`,
  },
];

export const metadata: Metadata = {
  title: "Gallinaza y compost de gallinaza para el campo",
  description:
    "Gallinaza, compost de gallinaza y estiércol de gallinas estabilizado: abono orgánico para mejorar suelo y cultivos. Información técnica y enlace a productos.",
  keywords: [
    "gallinaza",
    "compost de gallinaza",
    "abono orgánico sólido",
    "estiércol de gallinas",
    "fertilizante orgánico",
  ],
  alternates: {
    canonical: "/productos/gallinaza",
  },
  openGraph: {
    title: `Gallinaza y compost | ${SITE_NAME}`,
    description:
      "Soluciones sólidas con gallinaza y compost: materia orgánica para profesionales del campo.",
  },
};

export default function GallinazaSeoPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
            Abono orgánico · formato sólido
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Gallinaza y compost de gallinaza para agricultura profesional
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            La gallinaza bien tratada es una de las fuentes más eficientes de{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              materia orgánica y nutrientes
            </strong>{" "}
            para integrar en planes de fertilización sostenible.
          </p>
        </header>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Por qué encaja en tu sistema de fertilización
          </h2>
          <p>
            Los suelos con buena materia orgánica mantienen mejor la estructura,
            favorecen la actividad biológica y pueden liberar nutrientes de
            forma más equilibrada. La gallinaza y sus derivados (compost o
            producto secado) permiten incorporar ese aporte en{" "}
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
            Productos relacionados en {SITE_NAME}
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <Link
                href="/productos#estiércol-gallinas"
                className="text-[var(--primary)] underline-offset-2 hover:underline"
              >
                Estiércol de gallinas secado térmicamente
              </Link>{" "}
              — formatos sólidos para manejo y almacenamiento.
            </li>
            <li>
              <Link
                href="/productos#compost-gallinaza"
                className="text-[var(--primary)] underline-offset-2 hover:underline"
              >
                Compost de gallinaza por volteo
              </Link>{" "}
              — materia estabilizada por compostaje aeróbico.
            </li>
          </ul>
          <p>
            Si tu interés es{" "}
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
            Solicitar información sobre gallinaza
          </Link>
        </p>
      </article>
    </>
  );
}
