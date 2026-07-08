import { biolKnowledge } from "./biol-knowledge";
import { cropOptions, formatDosageSummary, calculateDosage } from "./biol-calculator";

export type AdvisorMessage = {
  role: "user" | "assistant";
  content: string;
};

const GREETING =
  "Hola, soy el asesor de biol líquido de Luvia. Puedo orientarte sobre composición, dosis por cultivo, modos de aplicación y fertirriego. ¿En qué te ayudo?";

const DISCLAIMER = biolKnowledge.disclaimer;

const QUICK_QUESTIONS = [
  "¿Cuál es la composición del biol?",
  "¿Dosis para banano?",
  "¿Se puede usar en fertirriego?",
  "¿Cuánto cuesta una caneca?",
] as const;

type MatchRule = {
  patterns: RegExp[];
  respond: (input: string) => string;
};

function includesCrop(input: string, cropId: string): boolean {
  const crop = cropOptions.find((c) => c.id === cropId);
  if (!crop) return false;
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

  let text = `**${crop.label}**\n`;
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

  return text;
}

const rules: MatchRule[] = [
  {
    patterns: [/hola|buenas|hey|saludos/i],
    respond: () =>
      `${GREETING}\n\nPuedes usar la calculadora de dosis arriba o preguntarme por un cultivo concreto.`,
  },
  {
    patterns: [/composici|nitrógeno|nitrogeno|fósforo|fosforo|potasio|npk|ph|conductividad/i],
    respond: () =>
      `**Composición del biol líquido (por litro):**\n• Nitrógeno: ${biolKnowledge.composition.nitrogen}\n• Fósforo: ${biolKnowledge.composition.phosphorus}\n• Potasio: ${biolKnowledge.composition.potassium}\n• pH: ${biolKnowledge.composition.ph}\n• Conductividad: ${biolKnowledge.composition.conductivity}\n• ${biolKnowledge.composition.organicMatter}\n\nPresentación: caneca de ${biolKnowledge.presentation}.`,
  },
  {
    patterns: [/beneficio|ventaja|para qué|para que sirve/i],
    respond: () =>
      `**Beneficios principales:**\n${biolKnowledge.benefits.map((b) => `• ${b}`).join("\n")}`,
  },
  {
    patterns: [/fertirriego|goteo|gotero|filtro/i],
    respond: () =>
      "Sí, el biol se puede usar en **fertirriego** si el producto está bien filtrado y el sistema lo permite. Recomendamos:\n• Prueba piloto en una zona pequeña\n• Revisar filtros y goteros\n• No mezclar con otros productos sin verificar compatibilidad\n• Consultar con un técnico antes de escalar a toda la finca.",
  },
  {
    patterns: [/aplic|riego|aspers|mochila|motobomba|modo/i],
    respond: () =>
      `**Modos de aplicación:** ${biolKnowledge.applicationMethods.join(", ")}.\n\nEs un producto 100 % natural y seguro. La elección depende de tu cultivo y sistema de riego.`,
  },
  {
    patterns: [/sólido|solido|gallinaza|compost|compar/i],
    respond: () =>
      "El biol líquido **no compite** con el abono sólido: se complementan. El sólido aporta materia orgánica a medio plazo; el líquido entra bien en riego y aportes más rápidos. Lo ideal es coordinar ambos con asesoramiento técnico.",
  },
  {
    patterns: [/precio|cost|comprar|pedir|caneca|disponib|cotiz/i],
    respond: () =>
      `Para precio, disponibilidad y envíos, contacta con nuestro equipo mediante el formulario o WhatsApp. Indica cultivo, superficie y sistema de riego para una cotización más precisa.\n\nPresentación estándar: **caneca de 20 L**.`,
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
      const overview = cropOptions
        .map((c) => `• **${c.shortLabel}:** ${c.biolPerUnit.min}–${c.biolPerUnit.max} L${c.unit === "plant" ? "/planta" : c.unit === "hectare" ? "/ha" : "/aplicación"}`)
        .join("\n");
      return `Las dosis dependen del cultivo. Resumen:\n\n${overview}\n\nIndica el cultivo y, si puedes, el número de plantas o hectáreas para una estimación más precisa. También puedes usar la **calculadora de dosis** en esta página.`;
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
      return `${response}\n\n_${DISCLAIMER}_`;
    }
  }

  return `Puedo ayudarte con composición, dosis por cultivo (banano, café, cacao, maíz, hortalizas…), fertirriego y modos de aplicación.\n\nPrueba preguntar, por ejemplo: "¿Dosis para 500 plantas de banano?" o usa la calculadora de dosis.\n\n_${DISCLAIMER}_`;
}
