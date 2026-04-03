import Link from "next/link";

import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
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
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <span className="text-[var(--foreground)]">Teléfono:</span>{" "}
                +34 000 000 000
              </li>
              <li>
                <span className="text-[var(--foreground)]">Email:</span>{" "}
                <a
                  href={`mailto:${SITE_CONTACT_EMAIL}`}
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  {SITE_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-[var(--foreground)]">Zona:</span>{" "}
                España (indicar provincia)
              </li>
            </ul>
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
                  href="/productos/abono-organico"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  Abono orgánico
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/gallinaza"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                >
                  Gallinaza
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
          © {year} {SITE_NAME}. Actualiza teléfono y zona en este bloque cuando
          los tengas definitivos.
        </p>
      </div>
    </footer>
  );
}
