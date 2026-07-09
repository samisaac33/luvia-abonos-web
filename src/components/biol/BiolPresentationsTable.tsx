import { biolPresentations } from "@/lib/biol-knowledge";

type BiolPresentationsTableProps = {
  className?: string;
};

export function BiolPresentationsTable({ className }: BiolPresentationsTableProps) {
  return (
    <div
      className={`overflow-x-auto rounded-2xl border border-[var(--border)] ${className ?? ""}`}
    >
      <table className="w-full min-w-[24rem] text-left text-sm">
        <caption className="sr-only">
          Presentaciones y precios del biol líquido
        </caption>
        <thead className="bg-[var(--card)]">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 font-semibold text-[var(--foreground)]"
            >
              Presentación
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-semibold text-[var(--foreground)]"
            >
              Capacidad
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-semibold text-[var(--foreground)]"
            >
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {biolPresentations.map((presentation) => (
            <tr
              key={presentation.name}
              className="border-t border-[var(--border)]"
            >
              <td className="px-4 py-3 align-top font-medium text-[var(--foreground)]">
                {presentation.name}
              </td>
              <td className="px-4 py-3 align-top text-[var(--muted)]">
                {presentation.capacity}
              </td>
              <td className="px-4 py-3 align-top font-medium text-[var(--foreground)]">
                {presentation.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
