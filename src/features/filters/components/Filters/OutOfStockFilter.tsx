import { Box, Checkbox } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { setOutOfStock } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"

export const OutOfStockFilter = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Box>
      <label htmlFor="isOutOfStock">
        Show out of Stock
        <Checkbox
          name="isOutOfStock"
          id="isOutOfStock"
          checked={filters.outOfStock}
          onChange={() => {
            dispatch(setOutOfStock())
          }}
        />
      </label>
    </Box>
  )
}
