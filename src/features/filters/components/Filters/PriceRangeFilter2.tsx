import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { Accordion } from "components"
import { useAppDispatch } from "features/shared/hooks"
import { setMaxPrice, setMinPrice } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"

export const PriceRangeFilter2 = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  const [minPriceLocal, setMinPriceLocal] = useState(filters.minPrice)
  const [maxPriceLocal, setMaxPriceLocal] = useState(filters.maxPrice)

  useEffect(() => {
    setMinPriceLocal(filters.minPrice)
    setMaxPriceLocal(filters.maxPrice)
  }, [filters.minPrice, filters.maxPrice])

  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="mdi:currency-usd" height={30} />
          <Typography>Price</Typography>
        </Box>
      }
      details={
        <Box>
          <TextField
            value={minPriceLocal === 0 ? "" : minPriceLocal}
            label="Min Price"
            color="secondary"
            onChange={(e) => {
              setMinPriceLocal(Number(e.target.value) | 0)
            }}
          />
          <TextField
            value={
              maxPriceLocal === 0 || maxPriceLocal === Infinity
                ? ""
                : maxPriceLocal
            }
            label="Max Price"
            color="secondary"
            onChange={(e) => {
              setMaxPriceLocal(Number(e.target.value) | 0)
            }}
          />
          <Box sx={{ mt: 1 }}>
            <Button
              fullWidth
              variant="contained"
              color="info"
              onClick={() => {
                dispatch(setMinPrice(minPriceLocal))
                dispatch(setMaxPrice(maxPriceLocal))
              }}
            >
              apply
            </Button>
          </Box>
        </Box>
      }
    />
  )
}
