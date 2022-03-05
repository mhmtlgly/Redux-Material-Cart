import { Box, Checkbox, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { Accordion } from "components"
import { useAppDispatch } from "features/shared/hooks"
import { setFastDelivery } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"
import { useProducts } from "features/shared/api"

export const FastDeliveryFilter = () => {
  const { products } = useProducts()
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="mdi:truck-fast-outline" height={30} />
          <Typography>Delivery</Typography>
        </Box>
      }
      details={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <label
            htmlFor="fastDelivery"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              name="fastDelivery"
              id="fastDelivery"
              checked={filters.fastDelivery}
              onChange={() => {
                dispatch(setFastDelivery())
              }}
            />
            Fast Delivery
          </label>
          <p>({products.filter((p) => p.deliveryTime === 1).length})</p>
        </Box>
      }
    />
  )
}
