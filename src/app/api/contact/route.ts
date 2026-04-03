import { Resend } from "resend";

import { contactFormSchema } from "@/lib/validations/contact";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo JSON inválido." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg =
      Object.values(first).flat()[0] ?? "Datos del formulario no válidos.";
    return Response.json({ error: msg }, { status: 400 });
  }

  const { name, phone, crop, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!to || !from) {
    return Response.json(
      { error: "Configuración de email incompleta en el servidor." },
      { status: 500 },
    );
  }

  if (!resend) {
    return Response.json(
      { error: "Servicio de email no configurado." },
      { status: 500 },
    );
  }

  const subject = `Nuevo contacto web — ${name}`;
  const text = [
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Cultivo: ${crop}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  const html = `
    <h2>Nuevo mensaje desde el formulario</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Cultivo:</strong> ${escapeHtml(crop)}</p>
    <p><strong>Mensaje:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      text,
      html,
    });

    if (error) {
      return Response.json(
        { error: "No se pudo enviar el email. Inténtalo más tarde." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
