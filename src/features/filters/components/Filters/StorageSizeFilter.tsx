import { Box, Checkbox, Typography, Divider } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { useProducts } from "features/shared/api"
import { setStorageSize } from "features/filters/filtersSlice"
import { useFiltersState, useFilteredProducts } from "features/filters/hooks"
import { Accordion } from "components"
import { StorageTypeFilter } from "./StorageTypeFilter"

export const StorageSizeFilter = () => {
  const { products } = useProducts()
  const filteredProducts = useFilteredProducts()
  const { filters } = useFiltersState()
  const dispatch = useAppDispatch()

  const storageValues = products
    .filter(
      (tag, index, array) =>
        array.findIndex((t) => t.storage === tag.storage) === index
    )
    .map((p) => p.storage)
    .sort((a, b) => a - b)

  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="mdi:database" height={30} />
          <Typography>Storage</Typography>
        </Box>
      }
      details={
        <>
          <StorageTypeFilter />
          {storageValues.map((value) => {
            return (
              <Box
                key={value}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <label
                  htmlFor={`selectedStorageSizes-${value}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    name={`selectedStorageSizes-${value}`}
                    id={`selectedStorageSizes-${value}`}
                    value={value}
                    onChange={() => {
                      dispatch(setStorageSize(value))
                    }}
                    checked={filters.storageSize.includes(value)}
                  />
                  {value} GB
                </label>
                <p>
                  (
                  {
                    filteredProducts.filter(
                      (p) => p.stock && p.storage === value
                    ).length
                  }
                  )
                </p>
              </Box>
            )
          })}
        </>
      }
    />
  )
}
