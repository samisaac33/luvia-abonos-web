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
    name: "Biol líquido por biodigestión anaerobia de residuos porcinos",
    format: "Líquido (digestato)",
    shortDescription:
      "Digestato líquido procedente de biodigestión anaerobia de residuos porcinos.",
    description:
      "Producto líquido obtenido tras un proceso de biodigestión anaerobia de residuos de origen porcino. El digestato puede utilizarse como complemento en planes de fertilización orgánica, aportando nutrientes y componentes orgánicos solubles o en suspensión.",
    benefits: [
      "Aplicación foliar o al suelo en formato líquido, según recomendación técnica.",
      "Integración en sistemas que buscan cerrar ciclos de nutrientes con residuos valorizados.",
      "Posible uso en fertirriego cuando la instalación y el producto lo permiten.",
    ],
    usage:
      "Diluir o aplicar según concentración y cultivo. Verificar compatibilidad con el sistema de riego y realizar pruebas en pequeña escala antes de extender a toda la parcela. Seguir siempre criterio técnico.",
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
