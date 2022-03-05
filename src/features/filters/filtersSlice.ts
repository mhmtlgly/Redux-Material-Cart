import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FiltersType } from "types"

const initialState: FiltersType = {
  fastDelivery: false,
  priceAsc: false,
  priceDesc: false,
  ssd: false,
  outOfStock: false,
  rating: 0,
  storageSize: [],
  minPrice: 0,
  maxPrice: Infinity,
  screenSize: [],
  brand: [],
  onSale: false,
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMinPrice: (state: FiltersType, action: PayloadAction<number>) => {
      return {
        ...state,
        minPrice: action.payload,
      }
    },

    setMaxPrice: (state: FiltersType, action: PayloadAction<number>) => {
      return {
        ...state,
        maxPrice: action.payload,
      }
    },

    setFastDelivery: (state: FiltersType) => {
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      }
    },

    setStorageSize: (state: FiltersType, action: PayloadAction<number>) => {
      return {
        ...state,
        storageSize: state.storageSize.includes(action.payload)
          ? [
              ...state.storageSize.filter(
                (storageSize) => storageSize !== action.payload
              ),
            ]
          : [...state.storageSize, action.payload],
      }
    },

    setPriceAsc: (state: FiltersType) => {
      return {
        ...state,
        priceAsc: !state.priceAsc,
        priceDesc: state.priceDesc ? false : state.priceDesc,
      }
    },

    setPriceDesc: (state: FiltersType) => {
      return {
        ...state,
        priceDesc: !state.priceDesc,
        priceAsc: state.priceAsc ? false : state.priceAsc,
      }
    },

    ssd: (state: FiltersType) => {
      return {
        ...state,
        ssd: !state.ssd,
      }
    },

    setOutOfStock: (state: FiltersType) => {
      return {
        ...state,
        outOfStock: !state.outOfStock,
      }
    },

    setRating: (state: FiltersType, action: PayloadAction<number>) => {
      return {
        ...state,
        rating: action.payload,
      }
    },

    setScreenSize: (state: FiltersType, action: PayloadAction<number>) => {
      return {
        ...state,
        screenSize: state.screenSize.includes(action.payload)
          ? [...state.screenSize.filter((screen) => screen !== action.payload)]
          : [...state.screenSize, action.payload],
      }
    },

    setBrand: (state: FiltersType, action: PayloadAction<string>) => {
      return {
        ...state,
        brand: state.brand.includes(action.payload)
          ? [...state.brand.filter((b) => b !== action.payload)]
          : [...state.brand, action.payload],
      }
    },

    setShowDiscountedOnly: (state: FiltersType) => {
      return {
        ...state,
        onSale: !state.onSale,
      }
    },

    clearFilters: () => initialState,
  },
})

export const {
  setFastDelivery,
  clearFilters,
  setOutOfStock,
  setPriceAsc,
  setPriceDesc,
  ssd,
  setRating,
  setStorageSize,
  setMaxPrice,
  setMinPrice,
  setScreenSize,
  setBrand,
  setShowDiscountedOnly,
} = filtersSlice.actions

export default filtersSlice.reducer
