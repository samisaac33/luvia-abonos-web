export const SITE_NAME = "Luvia Soluciones Orgánicas";

/** Correo de contacto público (debe coincidir con buzón real / Resend). */
export const SITE_CONTACT_EMAIL = "contacto@lluviagro.com";

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
