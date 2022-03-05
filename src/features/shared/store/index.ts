import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit"

import counterReducer from "../../counter/counterSlice"
import cartReducer from "../../shop/cartSlice"
import filtersReducer from "../../filters/filtersSlice"
import darkModeReducer from "../../darkMode/darkModeSlice"
import { DiscountType } from "types"

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  filters: filtersReducer,
  darkMode: darkModeReducer,
})

const cartItems = localStorage.getItem("cart")

export const store = configureStore({
  reducer: rootReducer,

  preloadedState: {
    cart: {
      products: cartItems ? JSON.parse(cartItems) : [],
      discount: {} as DiscountType,
    },
  },

  // devTools: false,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

store.subscribe(() => {
  const { products } = store.getState().cart
  localStorage.setItem("cart", JSON.stringify(products))
})
