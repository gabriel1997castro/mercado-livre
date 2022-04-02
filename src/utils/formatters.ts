export function formatPrice(language: string, currency: string, value: number) {
  return Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency
  }).format(value)
}
