import type { Product } from "./products";
import { getProductById } from "./products";
import { SITE_NAME } from "./site";

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
      "No compiten: se complementan. El sólido (gallinaza, compost) actúa con más énfasis en materia orgánica y efecto a medio plazo en el suelo; el líquido puede integrarse para aportes más rápidos o vía riego. La dosis global debe coordinarse con asesoramiento.",
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
  const product = getProductById("biol-porcino");
  if (!product) {
    throw new Error("Producto biol-porcino no encontrado");
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
    ...biolFaqs.map((f) => `${f.question} ${f.answer}`),
    biolKnowledge.disclaimer,
  ].join("\n");
}
