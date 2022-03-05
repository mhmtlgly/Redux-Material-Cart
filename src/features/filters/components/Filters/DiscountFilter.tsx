import { Box, Checkbox, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { setShowDiscountedOnly } from "features/filters/filtersSlice"
import { useFiltersState, useFilteredProducts } from "features/filters/hooks"
import { Accordion } from "components"

export const DiscountFilter = () => {
  const products = useFilteredProducts()
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="mdi:sale-outline" height={30} />
          <Typography>Sale</Typography>
        </Box>
      }
      details={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <label
            htmlFor="showDiscountedOnly"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              name="showDiscountedOnly"
              id="showDiscountedOnly"
              checked={filters.onSale}
              onChange={() => {
                dispatch(setShowDiscountedOnly())
              }}
            />
            On Sale
          </label>
          <p>({products.filter((p) => p.discount).length})</p>
        </Box>
      }
    />
  )
}
