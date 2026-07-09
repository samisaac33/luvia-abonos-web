import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sprout,
  Tractor,
} from "lucide-react";

import { PageSection } from "@/components/ui/PageContainer";
import { PageHero } from "@/components/ui/PageHero";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionImage } from "@/components/ui/SectionImage";
import { siteImages } from "@/lib/images";
import { getProductLandingPath, products } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        src={siteImages.hero.home}
        alt="Campo agrícola con cultivos verdes al amanecer"
        priority
      >
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
          Abonos orgánicos y fertilizantes agrícolas
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Nutre el suelo y mejora tus resultados en campo con {SITE_NAME}:{" "}
          {SITE_DESCRIPTION}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Slot className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90 sm:w-auto">
            <Link href="/productos">
              Ver productos
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Slot>
          <Link
            href="/contacto"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)] sm:w-auto"
          >
            Solicitar información
          </Link>
        </div>
      </PageHero>

      <PageSection variant="card" aria-labelledby="soluciones-heading">
        <h2
          id="soluciones-heading"
          className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl"
        >
          Soluciones para tu cultivo
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
          Guías orientadas a búsquedas habituales en el sector agrícola y
          enlaces al catálogo técnico.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              href: "/productos/gallinaza",
              title: "Gallinaza semi compostada",
              text: "Abono orgánico sólido estabilizado para suelos que necesitan estructura y nutrientes.",
              image: siteImages.hero.gallinaza,
            },
            {
              href: "/productos/biol-liquido",
              title: "Biol líquido",
              text: "Digestato y aplicaciones líquidas compatibles con riego y nutrición del cultivo.",
              image: siteImages.hero.biolLiquido,
            },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] transition hover:border-[var(--primary)]/40 hover:shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SectionImage
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] rounded-none border-0 transition group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionImage
            src={siteImages.sections.campo}
            alt="Agricultor en campo de cultivo"
          />
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              Por qué trabajar con nosotros
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Enfocados en calidad de materia orgánica, trazabilidad y
              acompañamiento para integrar nuestros productos en tu plan de
              fertilización.
            </p>
          </div>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
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
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm sm:p-6"
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
      </PageSection>

      <PageSection variant="card">
        <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Nuestros productos
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
          Dos soluciones para incorporar materia orgánica y nutrientes a tu
          sistema productivo.
        </p>
        <ul className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]"
            >
              <ProductImage
                src={siteImages.products[product.id as keyof typeof siteImages.products]}
                alt={product.name}
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
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
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link
            href="/contacto"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90 sm:w-auto"
          >
            Pedir presupuesto o muestras
          </Link>
        </p>
      </PageSection>
    </>
  );
}
