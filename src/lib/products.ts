export type Product = {
  id: string;
  name: string;
  format: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  usage: string;
};

export const products: Product[] = [
  {
    id: "estiércol-gallinas",
    name: "Estiércol de gallinas ponedoras secado térmicamente",
    format: "Sólido (granulado o particulado según presentación)",
    shortDescription:
      "Materia orgánica estabilizada mediante secado térmico, rica en nutrientes y materia orgánica.",
    description:
      "Producto derivado de gallinaza de ponedoras sometida a secado térmico para reducir la humedad y favorecer la manipulación y almacenamiento. Aporta materia orgánica y nutrientes que contribuyen a la fertilidad del suelo cuando se aplica de forma adecuada a la dosis y al cultivo.",
    benefits: [
      "Materia orgánica que mejora la retención de agua y la estructura del suelo.",
      "Aporte de nutrientes en formas que el cultivo puede utilizar progresivamente.",
      "Formato sólido apto para incorporación al suelo o preparación de mezclas.",
    ],
    usage:
      "Incorporar al suelo según análisis de suelo y asesoramiento agronómico. Ajustar la dosis al cultivo, textura del suelo y objetivos de fertilización. Evitar aplicaciones en exceso.",
  },
  {
    id: "compost-gallinaza",
    name: "Compost de gallinaza por volteo",
    format: "Molido / particulado fino",
    shortDescription:
      "Compostaje por volteo que estabiliza la materia orgánica y homogeneiza el producto final.",
    description:
      "Compost elaborado a partir de gallinaza sometida a proceso de compostaje con volteos periódicos para favorecer la aeración y la descomposición controlada de la materia orgánica. Presentación molida para una distribución más uniforme en campo o invernadero.",
    benefits: [
      "Materia orgánica humificada que mejora la actividad biológica del suelo.",
      "Textura homogénea que facilita la aplicación mecánica o manual.",
      "Menor riesgo de picos bruscos de mineralización si el proceso está bien finalizado.",
    ],
    usage:
      "Aplicar en fondo o en cobertera según programa de fertilización. Combinar con otras fuentes según necesidades del cultivo. Consultar con un técnico para dosis y momento de aplicación.",
  },
  {
    id: "biol-porcino",
    name: "Biol líquido orgánico biofermentado (20 L)",
    format: "Líquido · caneca 20 L",
    shortDescription:
      "Fertilizante líquido 100 % orgánico por biodigestión anaerobia. Ideal para banano, cacao, café, maíz y ornamentales.",
    description:
      "Fertilizante líquido orgánico biofermentado obtenido por biodigestión anaerobia. Aporta nitrógeno, fósforo, potasio, materia orgánica soluble, microorganismos beneficiosos y ácidos húmicos y fúlvicos. Nutrición sostenible con resultados confirmados por análisis de laboratorio.",
    benefits: [
      "Aumenta el crecimiento y vigor de las plantas.",
      "Regenera suelos degradados y mejora su estructura.",
      "Actúa como bioestimulante natural y favorece el desarrollo radicular.",
      "Aplicable por riego, fertirriego, aspersión o mochila.",
    ],
    usage:
      "Diluir según cultivo (p. ej. 1 L biol + 10 L agua en ornamentales; 1,5–2 L + 8–10 L agua por planta en banano). Aplicar cada 7–30 días según cultivo. Verificar compatibilidad con el sistema de riego antes de fertirriego.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Ruta SEO por familia de producto (landings informativas). */
export function getProductLandingPath(productId: string): string {
  const map: Record<string, string> = {
    "estiércol-gallinas": "/productos/gallinaza",
    "compost-gallinaza": "/productos/gallinaza",
    "biol-porcino": "/productos/biol-liquido",
  };
  return map[productId] ?? "/productos";
}
