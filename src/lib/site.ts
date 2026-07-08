export const SITE_NAME = "Luvia Soluciones Orgánicas";

/** Correo de contacto público (debe coincidir con buzón real / Resend). */
export const SITE_CONTACT_EMAIL = "contacto@lluviagro.com";

/**
 * Teléfono público de Luvia.
 * Edita aquí o define NEXT_PUBLIC_SITE_PHONE en Vercel.
 */
export const SITE_PHONE =
  process.env.NEXT_PUBLIC_SITE_PHONE?.trim() || "+593 99 077 5418";

/**
 * WhatsApp de Luvia (solo dígitos con código de país).
 * Edita aquí o define NEXT_PUBLIC_WHATSAPP_NUMBER en Vercel.
 */
export const SITE_WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "593990775418"
).replace(/\D/g, "");

/** Zona de operación / cobertura comercial. */
export const SITE_ZONE = "Portoviejo, Manabí, Ecuador";

/** Dirección o referencia de ubicación para clientes. */
export const SITE_ADDRESS = "Portoviejo, Manabí, Ecuador";

/** Propuesta de valor (hero, OG, meta cuando se combina con la marca). */
export const SITE_TAGLINE =
  "Fertilizantes y Abonos Orgánicos de Alta Eficiencia";

export const SITE_DESCRIPTION =
  "Soluciones orgánicas para la fertilización del suelo: abonos orgánicos, gallinaza, biol líquido y acompañamiento para cultivos más sanos y rentables.";

/** URL pública del sitio (sin barra final). Usar en JSON-LD, enlaces absolutos, etc. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");
}

export function getWhatsAppDigits(): string {
  return SITE_WHATSAPP_NUMBER.replace(/\D/g, "");
}

export function getWhatsAppUrl(message?: string): string | null {
  const digits = getWhatsAppDigits();
  if (!digits) return null;

  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getPhoneHref(): string | null {
  const digits = SITE_PHONE.replace(/\D/g, "");
  if (!digits) return null;
  return `tel:+${digits}`;
}

export type SiteContact = {
  phone: string;
  phoneHref: string | null;
  email: string;
  whatsappDigits: string;
  whatsappUrl: string | null;
  zone: string;
  address: string;
};

export function getSiteContact(): SiteContact {
  return {
    phone: SITE_PHONE,
    phoneHref: getPhoneHref(),
    email: SITE_CONTACT_EMAIL,
    whatsappDigits: getWhatsAppDigits(),
    whatsappUrl: getWhatsAppUrl(),
    zone: SITE_ZONE,
    address: SITE_ADDRESS,
  };
}
