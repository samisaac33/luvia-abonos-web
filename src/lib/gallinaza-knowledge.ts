import type { Product } from "./products";
import { formatPresentationsSummary, type ProductPresentation } from "./product-presentations";
import { getProductById } from "./products";
import { SITE_NAME } from "./site";

export const gallinazaPresentations: readonly ProductPresentation[] = [
  { name: "Saco", capacity: "40 kg", price: "US$2,00" },
  { name: "Big Bag", capacity: "1.000 kg (1 t)", price: "US$35,00" },
  { name: "A granel", capacity: "Desde 1 t", price: "US$30,00/t" },
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
    answer: `Disponemos de saco de 40 kg (US$2,00), big bag de 1.000 kg / 1 t (US$35,00) y suministro a granel desde 1 t (US$30,00/t). Los precios son orientativos; confirma disponibilidad y condiciones de entrega con ${SITE_NAME}.`,
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
