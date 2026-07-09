import {
  biolFaqs,
  biolKnowledge,
  formatBiolPresentationsSummary,
  getBiolProduct,
} from "./biol-knowledge";
import { cropOptions, formatDosageSummary, calculateDosage } from "./biol-calculator";
import { SITE_NAME } from "./site";

export type AdvisorMessage = {
  role: "user" | "assistant";
  content: string;
};

const product = getBiolProduct();

const GREETING =
  `Hola, soy el asesor de biol líquido de ${SITE_NAME}. Puedo orientarte sobre el digestato de nuestro catálogo, fertirriego y uso en campo. ¿En qué te ayudo?`;

const DISCLAIMER = biolKnowledge.disclaimer;

const QUICK_QUESTIONS = [
  "¿Qué es el digestato?",
  "¿Qué presentaciones hay?",
  "¿Se puede usar en fertirriego?",
  "¿Biol líquido frente a abono sólido?",
  "¿Cómo solicitar biol?",
] as const;

type MatchRule = {
  patterns: RegExp[];
  respond: (input: string) => string;
};

function includesCrop(input: string, cropId: string): boolean {
  const terms: Record<string, string[]> = {
    ornamentales: ["ornamental", "jardín", "jardin", "vivero", "interior"],
    banano: ["banano", "plátano", "platano", "banana"],
    cafe: ["café", "cafe", "cafeto"],
    cacao: ["cacao", "cocoa"],
    maiz: ["maíz", "maiz", "elote", "choclo"],
    hortalizas: ["hortaliza", "tomate", "pimiento", "pepino", "lechuga"],
    frutales: ["frutal", "cítrico", "citrico", "mango", "aguacate", "papaya"],
    pastos: ["pasto", "forraje", "pradera"],
  };
  return (terms[cropId] ?? []).some((t) => input.includes(t));
}

function extractNumber(input: string): number | null {
  const match = input.match(/(\d+(?:[.,]\d+)?)/);
  if (!match) return null;
  return Number.parseFloat(match[1].replace(",", "."));
}

function dosageForCrop(cropId: string, quantity?: number): string {
  const crop = cropOptions.find((c) => c.id === cropId);
  if (!crop) return "";

  let text = `**${crop.label}** (referencia orientativa para la calculadora)\n`;
  text += `• Mezcla: ${crop.biolPerUnit.min}–${crop.biolPerUnit.max} L biol`;
  if (crop.waterPerUnit) {
    text += ` + ${crop.waterPerUnit.min}–${crop.waterPerUnit.max} L agua`;
    if (crop.unit === "plant") text += " por planta";
    if (crop.unit === "hectare") text += " por hectárea";
    if (crop.unit === "application") text += " por aplicación";
  }
  text += `\n• Frecuencia: ${crop.frequency}\n• Método: ${crop.method}`;
  if (crop.benefits) text += `\n• Beneficio: ${crop.benefits}`;

  if (quantity && quantity > 0) {
    const result = calculateDosage(cropId, quantity, "riego");
    if (result) {
      text += `\n\n**Estimación para ${quantity} ${crop.unitLabel}:**\n${formatDosageSummary(result)}`;
    }
  }

  text += `\n\nPara dosis definitivas, ${SITE_NAME} confirma ficha técnica y asesoramiento por canal comercial.`;
  return text;
}

function faqAnswer(questionPattern: RegExp): string | null {
  const faq = biolFaqs.find((f) => questionPattern.test(f.question));
  return faq?.answer ?? null;
}

const rules: MatchRule[] = [
  {
    patterns: [/hola|buenas|hey|saludos/i],
    respond: () =>
      `${GREETING}\n\nPuedes usar la calculadora de dosis en esta página o preguntarme sobre el producto del catálogo.`,
  },
  {
    patterns: [/qué es|que es|digestato|biol líquido|biol liquido/i],
    respond: () => faqAnswer(/Qué es/) ?? product.description,
  },
  {
    patterns: [/beneficio|ventaja|para qué|para que sirve/i],
    respond: () =>
      `**Beneficios orientativos del catálogo:**\n${product.benefits.map((b) => `• ${b}`).join("\n")}`,
  },
  {
    patterns: [/fertirriego|goteo|gotero|filtro/i],
    respond: () => faqAnswer(/fertirriego/) ?? product.usage,
  },
  {
    patterns: [/aplic|riego|uso|diluir|modo/i],
    respond: () => `**Uso sugerido:** ${product.usage}`,
  },
  {
    patterns: [/sólido|solido|gallinaza|compost|compar/i],
    respond: () => faqAnswer(/frente a abono/) ?? "",
  },
  {
    patterns: [/presentaci|formato|caneca|ibc|tote|granel/i],
    respond: () =>
      `**Presentaciones y precios orientativos:**\n${formatBiolPresentationsSummary()}\n\nPara pedidos, logística o cotización formal, contacta con ${SITE_NAME}.`,
  },
  {
    patterns: [/precio|cost|comprar|pedir|solicitar|disponib|cotiz/i],
    respond: () => {
      const pricing = faqAnswer(/presentaciones y precios/);
      const request = faqAnswer(/solicitar/);
      return [pricing, request].filter(Boolean).join("\n\n");
    },
  },
  {
    patterns: [/ornamental|jardín|jardin|vivero/i],
    respond: (input) => dosageForCrop("ornamentales", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/banano|plátano|platano|banana/i],
    respond: (input) => dosageForCrop("banano", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/café|cafe|cafeto/i],
    respond: (input) => dosageForCrop("cafe", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/cacao|cocoa/i],
    respond: (input) => dosageForCrop("cacao", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/maíz|maiz|elote|choclo/i],
    respond: (input) => dosageForCrop("maiz", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/hortaliza|tomate|pimiento|pepino|lechuga/i],
    respond: (input) => dosageForCrop("hortalizas", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/frutal|cítrico|citrico|mango|aguacate|papaya/i],
    respond: (input) => dosageForCrop("frutales", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/pasto|forraje|pradera/i],
    respond: (input) => dosageForCrop("pastos", extractNumber(input) ?? undefined),
  },
  {
    patterns: [/dosis|cuánto|cuanto|mezcla|litro|hectárea|hectarea|planta/i],
    respond: (input) => {
      for (const crop of cropOptions) {
        if (includesCrop(input.toLowerCase(), crop.id)) {
          return dosageForCrop(crop.id, extractNumber(input) ?? undefined);
        }
      }
      return `**Producto en catálogo:** ${product.name}\n\n${product.usage}\n\nPara estimaciones por cultivo, usa la **calculadora de dosis** en esta página o contacta con ${SITE_NAME} para ficha técnica definitiva.`;
    },
  },
];

export function getAdvisorGreeting(): string {
  return GREETING;
}

export function getQuickQuestions(): readonly string[] {
  return QUICK_QUESTIONS;
}

export function getAdvisorResponse(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return "Escribe tu pregunta sobre el biol líquido o elige una de las sugerencias.";
  }

  const normalized = trimmed.toLowerCase();

  for (const rule of rules) {
    if (rule.patterns.some((p) => p.test(normalized))) {
      const response = rule.respond(normalized);
      if (response) {
        return `${response}\n\n_${DISCLAIMER}_`;
      }
    }
  }

  return `Puedo ayudarte con información del **${product.name}**: descripción, uso, fertirriego y comparación con abono sólido.\n\nPara dosis concretas, usa la calculadora o contacta con ${SITE_NAME}.\n\n_${DISCLAIMER}_`;
}
