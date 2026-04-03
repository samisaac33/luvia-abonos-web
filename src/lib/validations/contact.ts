import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Indica al menos 2 caracteres.")
    .max(120, "Máximo 120 caracteres."),
  phone: z
    .string()
    .min(9, "Introduce un teléfono válido.")
    .max(20, "Teléfono demasiado largo.")
    .regex(/^[\d\s+().-]+$/, "Solo números y símbolos de teléfono habituales."),
  crop: z
    .string()
    .min(2, "Indica el cultivo o zona de interés.")
    .max(200, "Máximo 200 caracteres."),
  message: z
    .string()
    .min(10, "Escribe un mensaje de al menos 10 caracteres.")
    .max(4000, "Máximo 4000 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
