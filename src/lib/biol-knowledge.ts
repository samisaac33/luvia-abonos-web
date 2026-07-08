import type { Product } from "./products";

/** Dosis recomendada por cultivo para el asesor agentico. */
export type BiolDosage = {
  crop: string;
  mixture: string;
  frequency: string;
  method?: string;
  benefits?: string;
};

/** Base de conocimiento del biol líquido para RAG y asesor agentico. */
export const biolKnowledge = {
  presentation: "20 L",
  packaging: "Caneca 20 litros",
  brand: "Hacienda El Secal",
  process: "Biodigestión anaerobia",
  composition: {
    nitrogen: "135 mg/L",
    phosphorus: "45 mg/L",
    potassium: "378 mg/L",
    organicMatter: "Materia orgánica soluble",
    conductivity: "Alta (ideal para nutrición del suelo)",
    ph: "7.69 (neutro y seguro para plantas)",
  },
  benefits: [
    "Aumenta el crecimiento y vigor de las plantas.",
    "Regenera suelos degradados y mejora su estructura.",
    "Actúa como bioestimulante natural.",
    "Favorece el desarrollo radicular.",
    "Reduce el estrés hídrico y nutricional.",
    "Apto para agricultura tradicional y orgánica.",
  ],
  applicationMethods: [
    "Riego",
    "Fertirriego",
    "Aspersión",
    "Mochila o motobomba",
  ],
  idealFor: [
    "Agricultores y viveristas.",
    "Plantaciones a gran escala: banano, cacao, café y maíz.",
    "Huertos familiares y cultivos orgánicos.",
    "Proyectos de regeneración de suelos.",
  ],
  dosages: [
    {
      crop: "Ornamentales (jardinería, viveros, plantas de interior)",
      mixture: "1 L de biol + 10 L de agua",
      frequency: "Cada 7–10 días",
      method: "Riego o aspersión",
    },
    {
      crop: "Banano y plátano",
      mixture: "1,5–2 L de biol + 8–10 L de agua por planta",
      frequency: "Cada 15 días",
      benefits: "Mejor llenado del racimo y vigor del pseudotallo",
    },
    {
      crop: "Café",
      mixture: "1 L de biol + 10 L de agua",
      frequency: "Cada 15–20 días",
      benefits: "Mayor floración y brotación",
    },
    {
      crop: "Cacao",
      mixture: "1–1,5 L de biol + 10 L de agua",
      frequency: "Cada 15 días",
      benefits: "Mejor cuajado y formación de mazorcas",
    },
    {
      crop: "Maíz",
      mixture: "80–120 L de biol por hectárea diluidos en 200–400 L de agua",
      frequency: "En emergencia, a los 30 días y prefloración",
      benefits: "Mayor diámetro de tallo y desarrollo radicular",
    },
    {
      crop: "Hortalizas (tomate, pimiento, pepino, lechuga, etc.)",
      mixture: "1 L de biol + 8–10 L de agua",
      frequency: "Semanal",
      benefits: "Mayor vigor, color y amarre de frutos",
    },
    {
      crop: "Frutales (cítricos, mango, aguacate, papaya)",
      mixture: "2 L de biol + 15 L de agua por planta",
      frequency: "Cada 20 días",
      benefits: "Mejor floración y desarrollo de frutos",
    },
    {
      crop: "Pastos y forrajes",
      mixture: "80–100 L de biol por hectárea",
      frequency: "Cada 20–30 días",
      benefits: "Rebrote acelerado y mayor cobertura",
    },
  ] satisfies BiolDosage[],
  disclaimer:
    "Las dosis son orientativas. Siempre consulta con un técnico agrícola antes de aplicar.",
} as const;

export function getBiolContextForAgent(product: Product): string {
  return [
    `Producto: ${product.name}`,
    `Formato: ${product.format}`,
    `Presentación: ${biolKnowledge.presentation}`,
    `Proceso: ${biolKnowledge.process}`,
    `Descripción: ${product.description}`,
    `Composición: N ${biolKnowledge.composition.nitrogen}, P ${biolKnowledge.composition.phosphorus}, K ${biolKnowledge.composition.potassium}, pH ${biolKnowledge.composition.ph}`,
    `Beneficios: ${biolKnowledge.benefits.join(" ")}`,
    `Modos de aplicación: ${biolKnowledge.applicationMethods.join(", ")}`,
    `Dosis por cultivo: ${biolKnowledge.dosages.map((d) => `${d.crop}: ${d.mixture}, ${d.frequency}`).join("; ")}`,
    biolKnowledge.disclaimer,
  ].join("\n");
}
