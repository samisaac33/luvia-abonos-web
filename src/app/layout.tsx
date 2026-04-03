import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Luvia Soluciones Orgánicas: abono orgánico, gallinaza compostada y biol líquido para mejorar la fertilidad del suelo y el rendimiento de cultivos.",
  keywords: [
    "Luvia",
    "soluciones orgánicas",
    "abono orgánico",
    "abonos agrícolas",
    "abonos orgánicos",
    "fertilizante orgánico",
    "fertilizantes agrícolas",
    "gallinaza",
    "gallinaza compostada",
    "biol líquido",
    "biol para cultivos",
    "mejorador de suelos",
    "nutrición vegetal",
    "fertilidad del suelo",
    "agricultura sostenible",
    "insumos agrícolas",
    "compost gallinaza",
    "abonos para cultivos",
  ],
  authors: [{ name: SITE_NAME }],
  category: "Agricultura",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Abono orgánico, gallinaza y biol líquido para productores que buscan suelos más sanos y mejores cosechas.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — soluciones orgánicas para agricultura`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Abono orgánico, gallinaza y biol líquido para mejorar la productividad agrícola.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
