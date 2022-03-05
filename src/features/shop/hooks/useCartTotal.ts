import { useAppSelector } from "features/shared/hooks"
import { amountToEuro } from "utils"

export const useCartTotal = () => {
  const { cart } = useAppSelector((state) => state)

  const cartTotal = cart.products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  )

  const discountAmount =
    cart.discount.type === "dollar"
      ? cart.discount.amount
      : (cartTotal / 100) * cart.discount.amount

  const cartTotalWithDiscount =
    cart.discount.type === "dollar"
      ? cartTotal - cart.discount.amount
      : cartTotal - (cartTotal / 100) * cart.discount.amount

  return {
    cartTotal: cartTotal,
    cartTotalInEuro: amountToEuro(cartTotal),
    discountAmount: amountToEuro(discountAmount),
    cartTotalWithDiscount: amountToEuro(cartTotalWithDiscount),
  }
}
