import { Box, Checkbox, Radio } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { setPriceDesc } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"

export const PriceDescFilter = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Box>
      <label htmlFor="priceDesc">
        <Radio
          name="priceDesc"
          id="priceDesc"
          checked={filters.priceDesc}
          onChange={() => {
            dispatch(setPriceDesc())
          }}
        />
        Price High-Low
      </label>
    </Box>
  )
}
