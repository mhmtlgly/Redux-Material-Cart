import { useAppSelector } from "features/shared/hooks"

export const useCartState = () => {
  const { cart } = useAppSelector((state) => state)
  return {
    cart,
  }
}
