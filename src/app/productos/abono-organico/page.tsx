import type { Metadata } from "next";
import Link from "next/link";

import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE_NAME } from "@/lib/site";

const faqs = [
  {
    question: "¿Qué es un abono orgánico frente a un fertilizante mineral?",
    answer:
      "El abono orgánico aporta materia orgánica y nutrientes en formas asociadas a fracciones orgánicas; suele actuar más de forma progresiva y favorece propiedades físicas y biológicas del suelo. El fertilizante mineral aporta nutrientes solubles de forma más inmediata. En agricultura profesional a menudo se combinan criterios técnicos de ambos enfoques.",
  },
  {
    question: "¿Qué aporta el abono orgánico al suelo?",
    answer:
      "Mejora estructura, retención de agua, población microbiana y suministro escalonado de nutrientes. Es especialmente valioso en suelos degradados, arenas o suelos con bajo contenido en materia orgánica.",
  },
  {
    question: `¿Qué productos orgánicos ofrece ${SITE_NAME}?`,
    answer:
      `${SITE_NAME} trabaja gallinaza y derivados en formato sólido (estiércol tratado térmicamente, compost por volteo) y biol líquido tipo digestato. Cada formato cubre necesidades distintas dentro del mismo plan de fertilización.`,
  },
  {
    question: "¿Necesito análisis de suelo antes de abonar?",
    answer:
      "Es la práctica recomendada: el análisis y el asesoramiento evitan desequilibrios, optimizan coste-efecto y cumplen buenas prácticas agrarias.",
  },
];

export const metadata: Metadata = {
  title: "Abono orgánico y fertilizantes agrícolas",
  description: `Guía sobre abono orgánico en agricultura: beneficios para el suelo, líneas gallinaza y biol líquido, y cómo dar el siguiente paso con ${SITE_NAME}.`,
  keywords: [
    "abono orgánico",
    "fertilizante orgánico",
    "materia orgánica suelo",
    "agricultura sostenible",
  ],
  alternates: {
    canonical: "/productos/abono-organico",
  },
  openGraph: {
    title: `Abono orgánico | ${SITE_NAME}`,
    description:
      "Materia orgánica y fertilización profesional: sólidos y líquidos.",
  },
};

export default function AbonoOrganicoSeoPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
            Guía · fertilización
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Abono orgánico para mejorar suelo y rendimiento
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Integrar{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              abonos orgánicos
            </strong>{" "}
            no es sustituir ciencia por “natural”: es ajustar materia orgánica,
            nutrientes y calendario con criterio agronómico.
          </p>
        </header>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Por dónde empezar
          </h2>
          <p>
            La mayoría de proyectos combinan un{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              aporte sólido
            </strong>{" "}
            (base orgánica y estructura) con{" "}
            <strong className="font-semibold text-[var(--foreground)]">
              soluciones líquidas
            </strong>{" "}
            cuando el sistema de riego o el cultivo lo permiten. En{" "}
            {SITE_NAME} agrupamos el catálogo en dos familias claras:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <Link
                href="/productos/gallinaza"
                className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
              >
                Gallinaza y compost
              </Link>{" "}
              — estiércol tratado y compost de volteo.
            </li>
            <li>
              <Link
                href="/productos/biol-liquido"
                className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
              >
                Biol líquido / digestato
              </Link>{" "}
              — digestión anaerobia, formato líquido.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4 text-[var(--muted)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Catálogo y asesoramiento
          </h2>
          <p>
            La información detallada por referencia está en{" "}
            <Link
              href="/productos"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              el catálogo de productos
            </Link>
            . Para dosis concretas, envíos o documentación, usa{" "}
            <Link
              href="/contacto"
              className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              contacto
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
            Hablar con el equipo
          </Link>
        </p>
      </article>
    </>
  );
}
