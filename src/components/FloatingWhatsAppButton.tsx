"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/lib/site";

export function FloatingWhatsAppButton() {
  const href = getWhatsAppUrl();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/30 transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
