import Link from "next/link";

import { ContactDetails } from "@/components/contact/ContactDetails";
import { pageGutterClass } from "@/components/ui/PageContainer";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className={cn("mx-auto max-w-6xl py-12 sm:py-14", pageGutterClass)}>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-[var(--foreground)]">
              {SITE_NAME}
            </p>
            <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
              Abonos orgánicos y fertilizantes agrícolas para profesionales del
              campo. Solicita información sin compromiso.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Contacto
            </p>
            <div className="mt-3">
              <ContactDetails showWhatsApp={false} showZone={false} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Enlaces
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/productos"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  Catálogo de productos
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/gallinaza"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  Gallinaza sólida semi compostada
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/biol-liquido"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  Biol líquido
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted)]">
          © {year} {SITE_NAME}.
        </p>
      </div>
    </footer>
  );
}
