import { Box, Slider } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { setMaxPrice, setMinPrice } from "features/filters/filtersSlice"
import { useProducts } from "features/shared/api"
import { useFiltersState } from "features/filters/hooks"

export const PriceRangeFilter = () => {
  const { products } = useProducts()
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Box
      sx={{
        width: 500,
        padding: 5,
      }}
    >
      <Slider
        value={[filters.minPrice, filters.maxPrice]}
        defaultValue={0}
        onChange={(event: Event, newValue: number | number[]) => {
          console.time()
          if (typeof newValue === "object") {
            dispatch(setMinPrice(newValue[0]))
            dispatch(setMaxPrice(newValue[1]))
          }
          console.timeEnd()
        }}
        min={Math.min(...products.map((p) => p.price))}
        max={Math.max(...products.map((p) => p.price))}
        step={100}
        valueLabelDisplay="on"
      />
    </Box>
  )
}
