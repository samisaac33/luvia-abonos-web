import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Solicita información sobre abonos orgánicos y fertilizantes agrícolas. Formulario de contacto — ${SITE_NAME}.`,
  openGraph: {
    title: `Contacto | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Cuéntanos tu cultivo y lo que necesitas. Responderemos lo antes posible
            por teléfono o email. También puedes escribirnos por WhatsApp usando
            el botón flotante.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[var(--muted)]">
            <li>
              <span className="font-medium text-[var(--foreground)]">Teléfono:</span>{" "}
              +34 000 000 000
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">Email:</span>{" "}
              contacto@ejemplo.com
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Formulario
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Los campos marcados implícitamente son obligatorios para poder
            responderte.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
