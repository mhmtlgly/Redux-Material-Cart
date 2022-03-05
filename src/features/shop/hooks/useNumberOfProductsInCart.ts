import { useAppSelector } from "features/shared/hooks"

export const useNumberOfProductsInCart = () => {
  const { products } = useAppSelector((state) => state.cart)

  const numberOfProducts = products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)

  return {
    numberOfProducts,
  }
}
