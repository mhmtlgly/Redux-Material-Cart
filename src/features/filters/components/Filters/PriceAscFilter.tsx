import { Box, Checkbox, Radio } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { setPriceAsc } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"

export const PriceAscFilter = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Box>
      <label htmlFor="priceAsc">
        <Radio
          name="priceAsc"
          id="priceAsc"
          checked={filters.priceAsc}
          onChange={() => {
            dispatch(setPriceAsc())
          }}
        />
        Price Low-High
      </label>
    </Box>
  )
}
