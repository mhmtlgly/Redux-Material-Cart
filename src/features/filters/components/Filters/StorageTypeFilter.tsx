import { Box, Checkbox } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { ssd } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"

export const StorageTypeFilter = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Box>
      <label htmlFor="ssd">
        <Checkbox
          name="ssd"
          id="ssd"
          checked={filters.ssd}
          onChange={() => {
            dispatch(ssd())
          }}
        />
        SSD only
      </label>
    </Box>
  )
}
