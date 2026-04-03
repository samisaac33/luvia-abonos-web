"use client";

import * as Label from "@radix-ui/react-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      crop: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          json.error ?? "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        );
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Error de red. Comprueba tu conexión e inténtalo de nuevo.");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] shadow-sm outline-none transition focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--ring)]/30";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div>
        <Label.Root
          htmlFor="name"
          className="text-sm font-medium text-[var(--foreground)]"
        >
          Nombre
        </Label.Root>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(fieldClass, errors.name && "border-red-500")}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label.Root
          htmlFor="phone"
          className="text-sm font-medium text-[var(--foreground)]"
        >
          Teléfono
        </Label.Root>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={cn(fieldClass, errors.phone && "border-red-500")}
          {...register("phone")}
        />
        {errors.phone && (
          <p
            id="phone-error"
            className="mt-1.5 text-sm text-red-600"
            role="alert"
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label.Root
          htmlFor="crop"
          className="text-sm font-medium text-[var(--foreground)]"
        >
          Cultivo
        </Label.Root>
        <input
          id="crop"
          type="text"
          autoComplete="off"
          placeholder="Ej.: olivar, invernadero, cereal…"
          aria-invalid={errors.crop ? true : undefined}
          aria-describedby={errors.crop ? "crop-error" : undefined}
          className={cn(fieldClass, errors.crop && "border-red-500")}
          {...register("crop")}
        />
        {errors.crop && (
          <p id="crop-error" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.crop.message}
          </p>
        )}
      </div>

      <div>
        <Label.Root
          htmlFor="message"
          className="text-sm font-medium text-[var(--foreground)]"
        >
          Mensaje
        </Label.Root>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y min-h-[120px]", errors.message && "border-red-500")}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1.5 text-sm text-red-600"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm text-[var(--foreground)]" role="status">
          Mensaje enviado correctamente. Te contactaremos pronto.
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-950/40 dark:text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
