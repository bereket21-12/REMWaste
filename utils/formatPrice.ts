export function formatPrice(
  value: number,
  locale = "en-UK",
  currency = "GBP"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}
