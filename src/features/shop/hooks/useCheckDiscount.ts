import { useCartState } from "."

export const useCheckDiscount = () => {
  const { cart } = useCartState()

  return {
    isDiscount: !!cart.discount.code,
  }
}
