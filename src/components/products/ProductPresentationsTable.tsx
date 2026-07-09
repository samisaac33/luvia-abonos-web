import type { ProductPresentation } from "@/lib/product-presentations";
import { cn } from "@/lib/utils";

type ProductPresentationsTableProps = {
  presentations: readonly ProductPresentation[];
  caption: string;
  className?: string;
  sizeColumnLabel?: string;
};

export function ProductPresentationsTable({
  presentations,
  caption,
  className,
  sizeColumnLabel = "Capacidad",
}: ProductPresentationsTableProps) {
  return (
    <div
      className={cn(
        "max-w-full overflow-x-auto rounded-2xl border border-[var(--border)]",
        className,
      )}
    >
      <table className="w-full min-w-0 text-left text-sm sm:min-w-[24rem]">
        <caption className="sr-only">{caption}</caption>
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
              {sizeColumnLabel}
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
          {presentations.map((presentation) => (
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
