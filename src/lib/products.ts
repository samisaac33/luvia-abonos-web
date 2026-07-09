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
    id: "gallinaza-semi-compostada",
    name: "Gallinaza sólida semi compostada",
    format: "Sólido (semi compostado)",
    shortDescription:
      "Abono orgánico sólido estabilizado por semi compostaje, rico en materia orgánica y nutrientes.",
    description:
      "Gallinaza sometida a un proceso de semi compostaje que reduce la humedad, estabiliza la materia orgánica y facilita el manejo en campo. Aporta nutrientes y mejora la fertilidad del suelo cuando se aplica de forma adecuada a la dosis y al cultivo.",
    benefits: [
      "Materia orgánica que mejora la retención de agua y la estructura del suelo.",
      "Aporte progresivo de nutrientes que el cultivo puede utilizar.",
      "Formato sólido apto para incorporación al suelo o aplicación en cobertera.",
    ],
    usage:
      "Incorporar al suelo según análisis de suelo y asesoramiento agronómico. Ajustar la dosis al cultivo, textura del suelo y objetivos de fertilización. Evitar aplicaciones en exceso.",
  },
  {
    id: "biol-liquido",
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
    "gallinaza-semi-compostada": "/productos/gallinaza",
    "biol-liquido": "/productos/biol-liquido",
  };
  return map[productId] ?? "/productos";
}
