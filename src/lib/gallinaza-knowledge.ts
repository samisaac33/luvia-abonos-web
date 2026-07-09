import type { Product } from "./products";
import { formatPresentationsSummary, type ProductPresentation } from "./product-presentations";
import { getProductById } from "./products";
import { SITE_NAME } from "./site";

export const gallinazaPresentations: readonly ProductPresentation[] = [
  { name: "Bulto", capacity: "50 kg", price: "US$20" },
  { name: "Big bag (Tote)", capacity: "1.000 kg (1 ton)", price: "US$850" },
  { name: "A granel", capacity: "Desde 5 ton", price: "US$800/ton" },
] as const;

export function formatGallinazaPresentationsSummary(): string {
  return formatPresentationsSummary(gallinazaPresentations);
}

export const gallinazaFaqs = [
  {
    question: "¿Qué es la gallinaza sólida semi compostada?",
    answer:
      "Es un abono orgánico sólido obtenido a partir de gallinaza sometida a un proceso de semi compostaje que estabiliza la materia orgánica. Aporta nutrientes y mejora la estructura, la retención de agua y la actividad biológica del suelo cuando se aplica con criterio técnico.",
  },
  {
    question: "¿Cómo se calcula la dosis de gallinaza?",
    answer:
      "La dosis debe basarse en análisis de suelo, objetivos de cultivo, textura y programa de fertilización. Siempre conviene asesoramiento técnico para evitar déficits o excesos y adaptar la aplicación al momento fenológico y al sistema de labor.",
  },
  {
    question: "¿Qué presentaciones y precios tiene la gallinaza?",
    answer: `Disponemos de bulto de 50 kg (US$20), big bag o tote de 1.000 kg / 1 ton (US$850) y suministro a granel desde 5 ton (US$800/ton). Los precios son orientativos; confirma disponibilidad y condiciones de entrega con ${SITE_NAME}.`,
  },
  {
    question: "¿Cómo solicitar gallinaza?",
    answer: `Contacta con ${SITE_NAME} mediante el formulario web o WhatsApp. Indica cultivo, superficie y volumen estimado para orientarte sobre formato y logística.`,
  },
] as const;

export function getGallinazaProduct(): Product {
  const product = getProductById("gallinaza-semi-compostada");
  if (!product) {
    throw new Error("Producto gallinaza-semi-compostada no encontrado");
  }
  return product;
}
