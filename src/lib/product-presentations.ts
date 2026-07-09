export type ProductPresentation = {
  name: string;
  capacity: string;
  price: string;
};

export function formatPresentationsSummary(
  presentations: readonly ProductPresentation[],
): string {
  return presentations
    .map((presentation) => {
      return `• ${presentation.name}: ${presentation.capacity} — ${presentation.price}`;
    })
    .join("\n");
}
