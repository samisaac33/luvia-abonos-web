import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

/**
 * Datos estructurados globales para marca y sitio (Google puede usarlo para knowledge panel / rich results).
 */
export function OrganizationJsonLd() {
  const base = getSiteUrl();
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
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: SITE_NAME,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "es-ES",
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
