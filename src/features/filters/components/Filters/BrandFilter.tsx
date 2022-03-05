import { Box, Checkbox, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { useProducts } from "features/shared/api"
import { setBrand } from "features/filters/filtersSlice"
import { useFiltersState } from "features/filters/hooks"
import { Accordion } from "components"

export const BrandFilter = () => {
  const { products } = useProducts()
  const { filters } = useFiltersState()
  const dispatch = useAppDispatch()

  const brands = products
    .map((p) => p.brand)
    .filter(
      (tag, index, array) =>
        array.findIndex((t) => t.toLowerCase() === tag.toLowerCase()) === index
    )
    .sort()

  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="ion:logo-apple" height={30} />
          <Typography>Brand</Typography>
        </Box>
      }
      details={
        <>
          {brands.map((value) => {
            const numberOfItems = products.filter(
              (p) => p.stock && p.brand.toLowerCase() === value.toLowerCase()
            ).length

            return (
              <Box
                key={value}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <label
                  htmlFor={`brand-${value}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    name={`brand-${value}`}
                    id={`brand-${value}`}
                    value={value}
                    onChange={() => {
                      dispatch(setBrand(value))
                    }}
                    checked={filters.brand.includes(value)}
                  />
                  {value}
                </label>
                <p>({numberOfItems})</p>
              </Box>
            )
          })}
        </>
      }
    />
  )
}
