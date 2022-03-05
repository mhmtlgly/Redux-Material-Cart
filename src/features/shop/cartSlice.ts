import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItemType, DiscountType } from "types"

export type CartState = {
  products: CartItemType[]
  discount: DiscountType
}

// const cartItems = localStorage.getItem("cart")
// const initialState: CartState = {
//   products: cartItems ? JSON.parse(cartItems) : [],
// }

const initialState: CartState = {
  products: [],
  discount: {} as DiscountType,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItemType>) => {
      const isInCart = state.products.find(
        (product) => product.id === action.payload.id
      )
      return isInCart
        ? state
        : { ...state, products: [...state.products, action.payload] }
    },

    // addToCart: (state: CartState, action: PayloadAction<CartItemType>) => {
    //   const isInCart = state.find((product) => product.id === action.payload.id)

    //   const products = isInCart
    //     ? [
    //         ...state.map((p) =>
    //           p.id === action.payload.id
    //             ? {
    //                 ...p,
    //                 quantity:
    //                   p.quantity + action.payload.quantity > p.stock
    //                     ? p.stock
    //                     : p.quantity + action.payload.quantity,
    //               }
    //             : { ...p }
    //         ),
    //       ]
    //     : [...state, action.payload]

    //   return products
    // },

    removeFromCart: (state: CartState, action: PayloadAction<CartItemType>) => {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      }
    },

    increaseQuantity: (
      state: CartState,
      action: PayloadAction<CartItemType>
    ) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      }
    },

    decreaseQuantity: (
      state: CartState,
      action: PayloadAction<CartItemType>
    ) => {
      const itemToDelete = state.products.find(
        (product) => product.id === action.payload.id
      )

      return {
        ...state,
        products:
          itemToDelete?.quantity === 1
            ? state.products.filter((p) => p.id !== action.payload.id)
            : state.products.map((product) =>
                product.id === action.payload.id
                  ? { ...product, quantity: product.quantity - 1 }
                  : product
              ),
      }
    },

    setQuantity: (
      state: CartState,
      action: PayloadAction<{ id: string; qty: number }>
    ) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.qty }
            : product
        ),
      }
    },

    setDiscount: (state: CartState, action: PayloadAction<DiscountType>) => {
      return {
        ...state,
        discount: action.payload,
      }
    },

    clearCart: () => initialState,
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  setQuantity,
  setDiscount,
} = cartSlice.actions

export default cartSlice.reducer
