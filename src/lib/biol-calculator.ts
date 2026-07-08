export type CropUnit = "plant" | "hectare" | "application";

export type IrrigationSystem =
  | "riego"
  | "fertirriego"
  | "aspersión"
  | "mochila";

export type CropOption = {
  id: string;
  label: string;
  shortLabel: string;
  unit: CropUnit;
  unitLabel: string;
  biolPerUnit: { min: number; max: number };
  waterPerUnit?: { min: number; max: number };
  frequency: string;
  method: string;
  benefits?: string;
};

export const CANECA_LITERS = 20;

export const cropOptions: CropOption[] = [
  {
    id: "ornamentales",
    label: "Ornamentales (jardinería, viveros, interior)",
    shortLabel: "Ornamentales",
    unit: "application",
    unitLabel: "aplicaciones al mes",
    biolPerUnit: { min: 1, max: 1 },
    waterPerUnit: { min: 10, max: 10 },
    frequency: "Cada 7–10 días",
    method: "Riego o aspersión",
  },
  {
    id: "banano",
    label: "Banano y plátano",
    shortLabel: "Banano",
    unit: "plant",
    unitLabel: "plantas",
    biolPerUnit: { min: 1.5, max: 2 },
    waterPerUnit: { min: 8, max: 10 },
    frequency: "Cada 15 días",
    method: "Riego localizado",
    benefits: "Mejor llenado del racimo y vigor del pseudotallo",
  },
  {
    id: "cafe",
    label: "Café",
    shortLabel: "Café",
    unit: "plant",
    unitLabel: "plantas",
    biolPerUnit: { min: 1, max: 1 },
    waterPerUnit: { min: 10, max: 10 },
    frequency: "Cada 15–20 días",
    method: "Riego o aspersión",
    benefits: "Mayor floración y brotación",
  },
  {
    id: "cacao",
    label: "Cacao",
    shortLabel: "Cacao",
    unit: "plant",
    unitLabel: "plantas",
    biolPerUnit: { min: 1, max: 1.5 },
    waterPerUnit: { min: 10, max: 10 },
    frequency: "Cada 15 días",
    method: "Riego o aspersión",
    benefits: "Mejor cuajado y formación de mazorcas",
  },
  {
    id: "maiz",
    label: "Maíz",
    shortLabel: "Maíz",
    unit: "hectare",
    unitLabel: "hectáreas",
    biolPerUnit: { min: 80, max: 120 },
    waterPerUnit: { min: 200, max: 400 },
    frequency: "Emergencia, 30 días y prefloración (3 aplicaciones/ciclo)",
    method: "Riego o aspersión al suelo",
    benefits: "Mayor diámetro de tallo y desarrollo radicular",
  },
  {
    id: "hortalizas",
    label: "Hortalizas (tomate, pimiento, pepino, lechuga…)",
    shortLabel: "Hortalizas",
    unit: "application",
    unitLabel: "aplicaciones al mes",
    biolPerUnit: { min: 1, max: 1 },
    waterPerUnit: { min: 8, max: 10 },
    frequency: "Semanal",
    method: "Riego o aspersión",
    benefits: "Mayor vigor, color y amarre de frutos",
  },
  {
    id: "frutales",
    label: "Frutales (cítricos, mango, aguacate, papaya)",
    shortLabel: "Frutales",
    unit: "plant",
    unitLabel: "plantas",
    biolPerUnit: { min: 2, max: 2 },
    waterPerUnit: { min: 15, max: 15 },
    frequency: "Cada 20 días",
    method: "Riego localizado",
    benefits: "Mejor floración y desarrollo de frutos",
  },
  {
    id: "pastos",
    label: "Pastos y forrajes",
    shortLabel: "Pastos",
    unit: "hectare",
    unitLabel: "hectáreas",
    biolPerUnit: { min: 80, max: 100 },
    frequency: "Cada 20–30 días",
    method: "Riego o aspersión",
    benefits: "Rebrote acelerado y mayor cobertura",
  },
];

export const irrigationOptions: {
  id: IrrigationSystem;
  label: string;
  note: string;
}[] = [
  {
    id: "riego",
    label: "Riego por superficie",
    note: "Aplicar la mezcla diluida de forma uniforme.",
  },
  {
    id: "fertirriego",
    label: "Fertirriego / goteo",
    note: "Revisar filtros y goteros; hacer prueba piloto antes de escalar.",
  },
  {
    id: "aspersión",
    label: "Aspersión",
    note: "Adecuado para aplicaciones foliares o al suelo en cultivos compatibles.",
  },
  {
    id: "mochila",
    label: "Mochila o motobomba",
    note: "Útil en parcelas pequeñas o zonas de difícil acceso.",
  },
];

export type DosageResult = {
  crop: CropOption;
  quantity: number;
  irrigation: IrrigationSystem;
  biolPerApplication: { min: number; max: number };
  waterPerApplication?: { min: number; max: number };
  canecasPerApplication: { min: number; max: number };
  applicationsPerCycle?: number;
  biolPerCycle?: { min: number; max: number };
  canecasPerCycle?: { min: number; max: number };
  mixtureDescription: string;
  frequency: string;
  method: string;
  benefits?: string;
  irrigationNote: string;
};

function round(value: number, decimals = 1): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function getCropById(id: string): CropOption | undefined {
  return cropOptions.find((c) => c.id === id);
}

export function calculateDosage(
  cropId: string,
  quantity: number,
  irrigation: IrrigationSystem,
): DosageResult | null {
  const crop = getCropById(cropId);
  if (!crop || quantity <= 0) return null;

  const irrigationNote =
    irrigationOptions.find((i) => i.id === irrigation)?.note ?? "";

  const biolMin = round(crop.biolPerUnit.min * quantity);
  const biolMax = round(crop.biolPerUnit.max * quantity);

  let waterMin: number | undefined;
  let waterMax: number | undefined;

  if (crop.waterPerUnit) {
    if (crop.unit === "hectare") {
      waterMin = crop.waterPerUnit.min;
      waterMax = crop.waterPerUnit.max;
    } else {
      waterMin = round(crop.waterPerUnit.min * quantity);
      waterMax = round(crop.waterPerUnit.max * quantity);
    }
  }

  let mixtureDescription: string;
  if (crop.unit === "plant") {
    mixtureDescription = `${crop.biolPerUnit.min}–${crop.biolPerUnit.max} L de biol + ${crop.waterPerUnit?.min}–${crop.waterPerUnit?.max} L de agua por planta`;
  } else if (crop.unit === "hectare") {
    mixtureDescription = `${crop.biolPerUnit.min}–${crop.biolPerUnit.max} L de biol por hectárea diluidos en ${crop.waterPerUnit?.min}–${crop.waterPerUnit?.max} L de agua`;
  } else {
    mixtureDescription = `${crop.biolPerUnit.min} L de biol + ${crop.waterPerUnit?.min}–${crop.waterPerUnit?.max} L de agua por aplicación`;
  }

  const result: DosageResult = {
    crop,
    quantity,
    irrigation,
    biolPerApplication: { min: biolMin, max: biolMax },
    waterPerApplication:
      waterMin !== undefined && waterMax !== undefined
        ? { min: waterMin, max: waterMax }
        : undefined,
    canecasPerApplication: {
      min: Math.ceil(biolMin / CANECA_LITERS),
      max: Math.ceil(biolMax / CANECA_LITERS),
    },
    mixtureDescription,
    frequency: crop.frequency,
    method: crop.method,
    benefits: crop.benefits,
    irrigationNote,
  };

  if (crop.id === "maiz") {
    const applications = 3;
    result.applicationsPerCycle = applications;
    result.biolPerCycle = {
      min: round(biolMin * applications),
      max: round(biolMax * applications),
    };
    result.canecasPerCycle = {
      min: Math.ceil((biolMin * applications) / CANECA_LITERS),
      max: Math.ceil((biolMax * applications) / CANECA_LITERS),
    };
  }

  return result;
}

export function formatDosageSummary(result: DosageResult): string {
  const lines = [
    `Cultivo: ${result.crop.shortLabel}`,
    `Escala: ${result.quantity} ${result.crop.unitLabel}`,
    `Mezcla de referencia: ${result.mixtureDescription}`,
    `Biol por aplicación: ${result.biolPerApplication.min}–${result.biolPerApplication.max} L (${result.canecasPerApplication.min}–${result.canecasPerApplication.max} caneca(s) de 20 L)`,
  ];

  if (result.waterPerApplication) {
    lines.push(
      `Agua por aplicación: ${result.waterPerApplication.min}–${result.waterPerApplication.max} L`,
    );
  }

  lines.push(`Frecuencia: ${result.frequency}`);
  lines.push(`Sistema: ${irrigationOptions.find((i) => i.id === result.irrigation)?.label}`);

  if (result.biolPerCycle) {
    lines.push(
      `Biol por ciclo (${result.applicationsPerCycle} aplicaciones): ${result.biolPerCycle.min}–${result.biolPerCycle.max} L`,
    );
  }

  return lines.join("\n");
}

export function buildContactMessage(result: DosageResult): string {
  return [
    "Hola, consulto por biol líquido.",
    "",
    formatDosageSummary(result),
    "",
    "¿Podrían confirmar disponibilidad y orientarme sobre la aplicación?",
  ].join("\n");
}

export function buildWhatsAppUrl(message: string, phone?: string): string {
  const digits = (phone?.replace(/\D/g, "") || "34123456789").trim();
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
