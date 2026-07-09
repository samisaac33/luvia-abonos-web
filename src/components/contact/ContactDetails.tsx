
import { getSiteContact } from "@/lib/site";

type ContactDetailsProps = {
  showWhatsApp?: boolean;
  showZone?: boolean;
};

export function ContactDetails({
  showWhatsApp = true,
  showZone = true,
}: ContactDetailsProps) {
  const contact = getSiteContact();

  return (
    <ul className="space-y-3 text-sm text-[var(--muted)]">
      {contact.phone && (
        <li>
          <span className="font-medium text-[var(--foreground)]">Teléfono:</span>{" "}
          {contact.phoneHref ? (
            <a
              href={contact.phoneHref}
              className="text-[var(--foreground)] underline-offset-4 hover:underline"
            >
              {contact.phone}
            </a>
          ) : (
            contact.phone
          )}
        </li>
      )}
      {showWhatsApp && contact.whatsappUrl && (
        <li>
          <span className="font-medium text-[var(--foreground)]">WhatsApp:</span>{" "}
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] underline-offset-4 hover:underline"
          >
            Escribir por WhatsApp
          </a>
        </li>
      )}
      <li>
        <span className="font-medium text-[var(--foreground)]">Email:</span>{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-[var(--foreground)] underline-offset-4 hover:underline"
        >
          {contact.email}
        </a>
      </li>
      {contact.address && (
        <li>
          <span className="font-medium text-[var(--foreground)]">Dirección:</span>{" "}
          {contact.address}
        </li>
      )}
      {showZone && contact.zone && (
        <li>
          <span className="font-medium text-[var(--foreground)]">Zona:</span>{" "}
          {contact.zone}
        </li>
      )}
    </ul>
  );
}
