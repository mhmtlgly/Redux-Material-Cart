import { Chip, Box } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { useFiltersState } from "features/filters/hooks"
import {
  setFastDelivery,
  setOutOfStock,
  setPriceAsc,
  setPriceDesc,
  ssd,
  setRating,
  setStorageSize,
  setMaxPrice,
  setMinPrice,
  setScreenSize,
  setBrand,
  setShowDiscountedOnly,
} from "features/filters/filtersSlice"

export const FilterChip = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()

  return (
    <>
      {filters.priceAsc ? (
        <Chip
          color="info"
          variant="outlined"
          label={"Price Ascending"}
          onDelete={() => dispatch(setPriceAsc())}
        />
      ) : null}
      {filters.priceDesc ? (
        <Chip
          color="info"
          variant="outlined"
          label={"Price Descending"}
          onDelete={() => dispatch(setPriceDesc())}
        />
      ) : null}
      {filters.minPrice !== 0 ? (
        <Chip
          color="info"
          variant="outlined"
          label={`min. ${filters.minPrice} €`}
          onDelete={() => dispatch(setMinPrice(0))}
        />
      ) : null}
      {filters.maxPrice !== Infinity ? (
        <Chip
          color="info"
          variant="outlined"
          label={`max. ${filters.maxPrice} €`}
          onDelete={() => dispatch(setMaxPrice(Number(Infinity)))}
        />
      ) : null}
      {filters.storageSize.map((value) => (
        <Chip
          key={value}
          color="info"
          variant="outlined"
          label={`${value} GB`}
          onDelete={() => dispatch(setStorageSize(value))}
        />
      ))}
      {filters.brand.map((value) => (
        <Chip
          key={value}
          color="info"
          variant="outlined"
          label={value}
          onDelete={() => dispatch(setBrand(value))}
        />
      ))}
      {filters.screenSize.map((value) => (
        <Chip
          key={value}
          color="info"
          variant="outlined"
          label={`${value} inch`}
          onDelete={() => dispatch(setScreenSize(value))}
        />
      ))}
      {filters.fastDelivery ? (
        <Chip
          color="info"
          variant="outlined"
          label={"Fast Delivery"}
          onDelete={() => dispatch(setFastDelivery())}
        />
      ) : null}
      {filters.onSale ? (
        <Chip
          color="info"
          variant="outlined"
          label={"On Sale"}
          onDelete={() => dispatch(setShowDiscountedOnly())}
        />
      ) : null}
      {filters.outOfStock ? (
        <Chip
          color="info"
          variant="outlined"
          label={"Out of Stock"}
          onDelete={() => dispatch(setOutOfStock())}
        />
      ) : null}
      {filters.ssd ? (
        <Chip
          color="info"
          variant="outlined"
          label={"SSD"}
          onDelete={() => dispatch(ssd())}
        />
      ) : null}
      {filters.rating ? (
        <Chip
          color="info"
          variant="outlined"
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {filters.rating}
              <Icon icon="mdi:star" height={15} />
            </Box>
          }
          onDelete={() => dispatch(setRating(0))}
        />
      ) : null}
    </>
  )
}
