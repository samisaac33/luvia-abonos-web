/**
 * Rutas de imágenes del sitio.
 * Sustituye los archivos en public/images/ manteniendo el mismo nombre
 * para actualizar el branding sin tocar el código.
 */
export const siteImages = {
  hero: {
    home: "/images/hero-home.jpg",
    productos: "/images/hero-productos.jpg",
    biolLiquido: "/images/hero-biol-liquido.jpg",
    gallinaza: "/images/hero-gallinaza.jpg",
    abonoOrganico: "/images/hero-abono-organico.jpg",
    contacto: "/images/hero-contacto.jpg",
  },
  products: {
    "estiércol-gallinas": "/images/products/estiercol-gallinas.jpg",
    "compost-gallinaza": "/images/products/compost-gallinaza.jpg",
    "biol-porcino": "/images/products/biol-porcino.jpg",
  },
  sections: {
    cultivos: "/images/sections/cultivos.jpg",
    campo: "/images/sections/campo.jpg",
  },
} as const;

export type ProductImageId = keyof typeof siteImages.products;
