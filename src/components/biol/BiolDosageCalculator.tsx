"use client";

import * as Label from "@radix-ui/react-label";
import { Calculator, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { buildContactMessage, calculateDosage, cropOptions, irrigationOptions, type DosageResult, type IrrigationSystem } from "@/lib/biol-calculator";
import { biolKnowledge } from "@/lib/biol-knowledge";
import { getWhatsAppUrl } from "@/lib/site";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-[var(--foreground)] shadow-sm outline-none transition focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--ring)]/30";

function ResultCard({ result }: { result: DosageResult }) {
  const contactHref = useMemo(() => {
    const message = buildContactMessage(result);
    const params = new URLSearchParams({
      product: "biol-liquido",
      crop: result.crop.shortLabel,
      message,
    });
    return `/contacto?${params.toString()}`;
  }, [result]);

  const whatsappHref = useMemo(() => {
    const message = buildContactMessage(result);
    return getWhatsAppUrl(message);
  }, [result]);

  return (
    <div className="mt-6 space-y-4 rounded-2xl border border-[var(--primary)]/30 bg-[var(--accent)]/50 p-5">
      <h3 className="font-semibold text-[var(--foreground)]">
        Estimación orientativa
      </h3>
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-[var(--muted)]">Mezcla de referencia</dt>
          <dd className="mt-0.5 font-medium text-[var(--foreground)]">
            {result.mixtureDescription}
          </dd>
        </div>
        <div>
          <dt className="text-[var(--muted)]">Biol por aplicación</dt>
          <dd className="mt-0.5 font-medium text-[var(--foreground)]">
            {result.biolPerApplication.min}–{result.biolPerApplication.max} L
            <span className="text-[var(--muted)]">
              {" "}
              ({result.canecasPerApplication.min}–
              {result.canecasPerApplication.max} caneca(s) de 20 L)
            </span>
          </dd>
        </div>
        {result.waterPerApplication && (
          <div>
            <dt className="text-[var(--muted)]">Agua por aplicación</dt>
            <dd className="mt-0.5 font-medium text-[var(--foreground)]">
              {result.waterPerApplication.min}–{result.waterPerApplication.max}{" "}
              L
            </dd>
          </div>
        )}
        <div>
          <dt className="text-[var(--muted)]">Frecuencia</dt>
          <dd className="mt-0.5 font-medium text-[var(--foreground)]">
            {result.frequency}
          </dd>
        </div>
        {result.benefits && (
          <div className="sm:col-span-2">
            <dt className="text-[var(--muted)]">Beneficio esperado</dt>
            <dd className="mt-0.5 font-medium text-[var(--foreground)]">
              {result.benefits}
            </dd>
          </div>
        )}
        {result.biolPerCycle && (
          <div className="sm:col-span-2">
            <dt className="text-[var(--muted)]">
              Biol por ciclo ({result.applicationsPerCycle} aplicaciones)
            </dt>
            <dd className="mt-0.5 font-medium text-[var(--foreground)]">
              {result.biolPerCycle.min}–{result.biolPerCycle.max} L (
              {result.canecasPerCycle?.min}–{result.canecasPerCycle?.max}{" "}
              canecas)
            </dd>
          </div>
        )}
        <div className="sm:col-span-2">
          <dt className="text-[var(--muted)]">Nota sobre tu sistema de riego</dt>
          <dd className="mt-0.5 text-[var(--foreground)]">
            {result.irrigationNote}
          </dd>
        </div>
      </dl>
      <p className="text-xs text-[var(--muted)]">{biolKnowledge.disclaimer}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={contactHref}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
        >
          <Send className="size-4" aria-hidden />
          Solicitar cotización
        </Link>
        {whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)]"
          >
            <MessageCircle className="size-4" aria-hidden />
            Enviar por WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

export function BiolDosageCalculator() {
  const [cropId, setCropId] = useState(cropOptions[1]?.id ?? "banano");
  const [quantity, setQuantity] = useState("100");
  const [irrigation, setIrrigation] = useState<IrrigationSystem>("fertirriego");

  const selectedCrop = cropOptions.find((c) => c.id === cropId);
  const parsedQuantity = Number.parseFloat(quantity.replace(",", "."));
  const result =
    selectedCrop && parsedQuantity > 0
      ? calculateDosage(cropId, parsedQuantity, irrigation)
      : null;

  return (
    <section
      id="calculadora-dosis"
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
      aria-labelledby="calculator-heading"
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
          <Calculator className="size-5" aria-hidden />
        </div>
        <div>
          <h2
            id="calculator-heading"
            className="text-lg font-semibold text-[var(--foreground)]"
          >
            Calculadora de dosis
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Estima litros de biol y canecas de 20 L según tu cultivo y escala.
          </p>
        </div>
      </div>

      <form
        className="mt-6 grid gap-5 sm:grid-cols-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="sm:col-span-2">
          <Label.Root
            htmlFor="crop"
            className="text-sm font-medium text-[var(--foreground)]"
          >
            Cultivo
          </Label.Root>
          <select
            id="crop"
            value={cropId}
            onChange={(e) => setCropId(e.target.value)}
            className={fieldClass}
          >
            {cropOptions.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {crop.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label.Root
            htmlFor="quantity"
            className="text-sm font-medium text-[var(--foreground)]"
          >
            {selectedCrop?.unitLabel ?? "Cantidad"}
          </Label.Root>
          <input
            id="quantity"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <Label.Root
            htmlFor="irrigation"
            className="text-sm font-medium text-[var(--foreground)]"
          >
            Sistema de aplicación
          </Label.Root>
          <select
            id="irrigation"
            value={irrigation}
            onChange={(e) => setIrrigation(e.target.value as IrrigationSystem)}
            className={fieldClass}
          >
            {irrigationOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </form>

      {result && <ResultCard result={result} />}
      {quantity && parsedQuantity <= 0 && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          Introduce una cantidad mayor que cero.
        </p>
      )}
    </section>
  );
}
