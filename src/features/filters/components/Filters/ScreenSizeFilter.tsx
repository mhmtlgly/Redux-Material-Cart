import { Box, Checkbox, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { setScreenSize } from "features/filters/filtersSlice"
import { useFiltersState, useFilteredProducts } from "features/filters/hooks"
import { Accordion } from "components"
import { useProducts } from "features/shared/api"

export const ScreenSizeFilter = () => {
  const { products } = useProducts()
  const filteredProducts = useFilteredProducts()
  const { filters } = useFiltersState()
  const dispatch = useAppDispatch()

  const screenSizeValues = products
    .map((p) => Math.floor(p.screen))
    .filter((tag, index, array) => array.findIndex((t) => t === tag) === index)
    .sort((a, b) => a - b)

  const numberOfItems = (value: number) =>
    products.filter(
      (p) => p.stock && Math.floor(p.screen) === Math.floor(value)
    ).length

  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="mdi:monitor-screenshot" height={30} />
          <Typography>Screen</Typography>
        </Box>
      }
      details={screenSizeValues.map((value) => {
        return (
          <Box
            key={value}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <label
              htmlFor={`selectedScreenSizes-${value}`}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                name={`selectedScreenSizes-${value}`}
                id={`selectedScreenSizes-${value}`}
                value={value}
                onChange={() => {
                  dispatch(setScreenSize(value))
                }}
                checked={filters.screenSize.includes(value)}
              />
              {value} inch
            </label>
            <p>
              ({numberOfItems(value)}
              {/* {
                products.filter(
                  (p) => p.stock && Math.floor(p.screen) === Math.floor(value)
                ).length
              } */}
              )
            </p>
          </Box>
        )
      })}
    />
  )
}
