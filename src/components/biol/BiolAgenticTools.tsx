import { SITE_NAME } from "@/lib/site";

import { BiolAdvisorChat } from "./BiolAdvisorChat";
import { BiolDosageCalculator } from "./BiolDosageCalculator";

export function BiolAgenticTools() {
  return (
    <section
      className="mt-14 space-y-6"
      aria-labelledby="agentic-tools-heading"
    >
      <div>
        <h2
          id="agentic-tools-heading"
          className="text-xl font-semibold text-[var(--foreground)]"
        >
          Herramientas de asesoramiento
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Calcula una estimación orientativa o pregunta al asesor. Los
          resultados no sustituyen la ficha técnica ni el asesoramiento de{" "}
          {SITE_NAME}.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <BiolDosageCalculator />
        <BiolAdvisorChat />
      </div>
    </section>
  );
}
