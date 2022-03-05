export const amountToEuro = (amount: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    // currencyDisplay: "symbol",
  }).format(amount)
