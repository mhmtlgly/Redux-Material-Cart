export type ProductType = {
  id: any
  model: string
  price: number
  img: string
  brand: string
  screen: number
  ssd: boolean
  storage: number
  os: string
  discount: number
  rating: {
    numberOfRatings: number
    ratingValue: number
  }
  deliveryTime: number
  stock: number
}

export type CartItemType = ProductType & {
  quantity: number
}

export type FiltersType = {
  outOfStock: boolean
  fastDelivery: boolean
  rating: number
  minPrice: number
  maxPrice: number
  priceAsc: boolean
  priceDesc: boolean
  ssd: boolean
  storageSize: number[]
  screenSize: number[]
  brand: string[]
  onSale: boolean
}

export type DiscountType = {
  amount: number
  code: string
  status: "active" | "expired"
  type: "dollar" | "percent"
}

export type CartState = {
  products: CartItemType[]
  discount: DiscountType
}
