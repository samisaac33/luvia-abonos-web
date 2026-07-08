import {
  getSiteContact,
  getSiteUrl,
  SITE_ADDRESS,
  SITE_CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_PHONE,
} from "@/lib/site";

/**
 * Datos estructurados globales para marca y sitio (Google puede usarlo para knowledge panel / rich results).
 */
export function OrganizationJsonLd() {
  const base = getSiteUrl();
  const contact = getSiteContact();

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: SITE_NAME,
        url: base,
        logo: {
          "@type": "ImageObject",
          url: `${base}/logo.png`,
        },
        description: SITE_DESCRIPTION,
        email: SITE_CONTACT_EMAIL,
        telephone: SITE_PHONE,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Portoviejo",
          addressRegion: "Manabí",
          addressCountry: "EC",
          streetAddress: SITE_ADDRESS,
        },
        contactPoint: contact.whatsappUrl
          ? [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: SITE_PHONE,
                email: SITE_CONTACT_EMAIL,
                availableLanguage: ["Spanish"],
                areaServed: "EC",
              },
            ]
          : undefined,
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: SITE_NAME,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "es-EC",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
