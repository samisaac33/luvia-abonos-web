import type { ProductPresentation } from "@/lib/product-presentations";
import { cn } from "@/lib/utils";

type ProductPresentationsTableProps = {
  presentations: readonly ProductPresentation[];
  caption: string;
  className?: string;
  sizeColumnLabel?: string;
};

const cellClass =
  "px-2 py-2.5 align-top break-words sm:px-4 sm:py-3";

export function ProductPresentationsTable({
  presentations,
  caption,
  className,
  sizeColumnLabel = "Capacidad",
}: ProductPresentationsTableProps) {
  return (
    <div
      className={cn(
        "w-full max-w-full overflow-hidden rounded-2xl border border-[var(--border)]",
        className,
      )}
    >
      <table className="w-full table-fixed text-left text-xs leading-snug sm:text-sm sm:leading-normal">
        <caption className="sr-only">{caption}</caption>
        <colgroup>
          <col className="w-[34%]" />
          <col className="w-[38%]" />
          <col className="w-[28%]" />
        </colgroup>
        <thead className="bg-[var(--card)]">
          <tr>
            <th
              scope="col"
              className={cn(cellClass, "font-semibold text-[var(--foreground)]")}
            >
              Presentación
            </th>
            <th
              scope="col"
              className={cn(cellClass, "font-semibold text-[var(--foreground)]")}
            >
              {sizeColumnLabel}
            </th>
            <th
              scope="col"
              className={cn(cellClass, "font-semibold text-[var(--foreground)]")}
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
              <td
                className={cn(
                  cellClass,
                  "font-medium text-[var(--foreground)]",
                )}
              >
                {presentation.name}
              </td>
              <td className={cn(cellClass, "text-[var(--muted)]")}>
                {presentation.capacity}
              </td>
              <td
                className={cn(
                  cellClass,
                  "font-medium text-[var(--foreground)]",
                )}
              >
                {presentation.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
