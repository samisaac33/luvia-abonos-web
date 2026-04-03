import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sprout,
  Tractor,
} from "lucide-react";

import { getProductLandingPath, products } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--accent)]/40 to-[var(--background)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
            Abonos orgánicos y fertilizantes agrícolas
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Nutre el suelo y mejora tus resultados en campo con {SITE_NAME}:{" "}
            {SITE_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Slot className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90">
              <Link href="/productos">
                Ver productos
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Slot>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)]"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[var(--border)] bg-[var(--card)] py-14 sm:py-20"
        aria-labelledby="soluciones-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="soluciones-heading"
            className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl"
          >
            Soluciones para tu cultivo
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
            Páginas con contenido orientado a búsquedas habituales en el sector
            agrícola y enlaces al catálogo técnico.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                href: "/productos/abono-organico",
                title: "Abono orgánico",
                text: "Qué aporta la materia orgánica y cómo combinarla con tu plan de fertilización.",
              },
              {
                href: "/productos/gallinaza",
                title: "Gallinaza y compost",
                text: "Gallinaza tratada y compost de volteo para suelos que necesitan estructura y nutrientes.",
              },
              {
                href: "/productos/biol-liquido",
                title: "Biol líquido",
                text: "Digestato y aplicaciones líquidas compatibles con riego y nutrición del cultivo.",
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[var(--primary)]/40 hover:shadow-sm"
                >
                  <span className="text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </span>
                  <span className="mt-2 flex-1 text-sm text-[var(--muted)]">
                    {item.text}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                    Leer guía
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Por qué trabajar con nosotros
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
          Enfocados en calidad de materia orgánica, trazabilidad y acompañamiento
          para integrar nuestros productos en tu plan de fertilización.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Leaf,
              title: "Origen controlado",
              text: "Procesos definidos para estabilizar la materia orgánica y facilitar su uso en campo.",
            },
            {
              icon: Sprout,
              title: "Suelo vivo",
              text: "Productos pensados para mejorar estructura y actividad biológica del suelo.",
            },
            {
              icon: ShieldCheck,
              title: "Asesoramiento",
              text: "Te ayudamos a encajar dosis y momentos de aplicación con tu cultivo.",
            },
            {
              icon: Tractor,
              title: "Logística agrícola",
              text: "Formatos sólidos y líquidos adaptados a distintas explotaciones.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--card)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Nuestros productos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
            Tres soluciones para incorporar materia orgánica y nutrientes a tu
            sistema productivo.
          </p>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--primary)]">
                  {product.format}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--foreground)]">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm text-[var(--muted)]">
                  {product.shortDescription}
                </p>
                <Link
                  href={getProductLandingPath(product.id)}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] hover:underline"
                >
                  Ver ficha y guía
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
            >
              Pedir presupuesto o muestras
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
