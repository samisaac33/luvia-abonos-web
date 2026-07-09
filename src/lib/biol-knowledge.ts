import type { Product } from "./products";
import { formatPresentationsSummary, type ProductPresentation } from "./product-presentations";
import { getProductById } from "./products";
import { SITE_NAME } from "./site";

export const biolPresentations: readonly ProductPresentation[] = [
  { name: "Caneca", capacity: "20 L", price: "US$20" },
  { name: "IBC (Tote)", capacity: "1.000 L (1 m³)", price: "US$850" },
  { name: "A granel", capacity: "8 m³", price: "US$800/m³" },
] as const;

export function formatBiolPresentationsSummary(): string {
  return formatPresentationsSummary(biolPresentations);
}

export const biolFaqs = [
  {
    question: "¿Qué es el biol líquido o digestato?",
    answer:
      "El biol líquido suele referirse a fertilizantes orgánicos o orgánico-minerales en forma líquida. En nuestro catálogo, el digestato procede de biodigestión anaerobia de residuos valorizados: aporta nutrientes y fracción orgánica en suspensión o disuelta, útil como complemento del plan de fertirriego o aplicación al suelo según criterio técnico.",
  },
  {
    question: "¿Se puede usar en fertirriego?",
    answer:
      "Depende de la calidad del producto, filtración, compatibilidad con el sistema y recomendación técnica. Conviene pruebas a pequeña escala y revisión de goteros, filtros y mezclas con otros productos antes de extender a toda la instalación.",
  },
  {
    question: "¿Biol líquido frente a abono sólido?",
    answer:
      "No compiten: se complementan. La gallinaza sólida semi compostada actúa con más énfasis en materia orgánica y efecto a medio plazo en el suelo; el biol líquido puede integrarse para aportes más rápidos o vía riego. La dosis global debe coordinarse con asesoramiento.",
  },
  {
    question: "¿Qué presentaciones y precios tiene el biol líquido?",
    answer: `Disponemos de caneca de 20 L (US$20), IBC o tote de 1.000 L / 1 m³ (US$850) y suministro a granel desde 5 m³ (US$800/m³). Los precios son orientativos; confirma disponibilidad y condiciones de entrega con ${SITE_NAME}.`,
  },
  {
    question: "¿Cómo solicitar biol o digestato?",
    answer: `Contacta con ${SITE_NAME} mediante el formulario web o WhatsApp. Indica cultivo, superficie y sistema de aplicación para orientarte sobre formatos y documentación.`,
  },
] as const;

export const biolKnowledge = {
  disclaimer:
    "Las dosis de la calculadora son orientativas. Siempre consulta con un técnico agrícola antes de aplicar.",
} as const;

export function getBiolProduct(): Product {
  const product = getProductById("biol-liquido");
  if (!product) {
    throw new Error("Producto biol-liquido no encontrado");
  }
  return product;
}

export function getBiolContextForAgent(product: Product): string {
  return [
    `Producto: ${product.name}`,
    `Formato: ${product.format}`,
    `Descripción: ${product.description}`,
    `Beneficios: ${product.benefits.join(" ")}`,
    `Uso sugerido: ${product.usage}`,
    `Presentaciones y precios:\n${formatBiolPresentationsSummary()}`,
    ...biolFaqs.map((f) => `${f.question} ${f.answer}`),
    biolKnowledge.disclaimer,
  ].join("\n");
}
