import { useProducts } from "features/shared/api"
import { useFiltersState } from "./useFiltersState"

export const useFilteredProducts = () => {
  const { products } = useProducts()
  const {
    filters: {
      fastDelivery,
      maxPrice,
      minPrice,
      outOfStock,
      priceAsc,
      priceDesc,
      rating,
      ssd,
      storageSize,
      screenSize,
      brand,
      onSale,
    },
  } = useFiltersState()

  let filteredProducts = products

  if (onSale) {
    filteredProducts = filteredProducts.filter((item) => item.discount)
  }

  if (brand.length) {
    filteredProducts = filteredProducts.filter((item) =>
      brand.map((b) => b.toLowerCase()).includes(item.brand.toLowerCase())
    )
  }

  if (screenSize.length) {
    filteredProducts = filteredProducts.filter((item) =>
      screenSize.includes(Math.floor(item.screen))
    )
  }

  if (fastDelivery) {
    filteredProducts = filteredProducts.filter(
      (product) => product.deliveryTime === 1
    )
  }

  if (!outOfStock) {
    filteredProducts = filteredProducts.filter((product) => product.stock >= 1)
  }

  if (priceAsc) {
    filteredProducts = filteredProducts.sort(
      (a, b) =>
        (a.price * (100 - a.discount)) / 100 -
        (b.price * (100 - b.discount)) / 100
    )
  }

  if (priceDesc) {
    filteredProducts = filteredProducts.sort(
      (a, b) =>
        (b.price * (100 - b.discount)) / 100 -
        (a.price * (100 - a.discount)) / 100
    )
  }

  if (ssd) {
    filteredProducts = filteredProducts.filter((product) => product.ssd)
  }

  if (rating) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating.ratingValue >= rating
    )
  }

  if (storageSize.length) {
    filteredProducts = filteredProducts.filter((item) =>
      storageSize.includes(item.storage)
    )
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter((item) => item.price >= minPrice)
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter((item) => item.price <= maxPrice)
  }

  return filteredProducts
}
