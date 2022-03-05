import { Box, Paper, PaperProps } from "@mui/material"

import { FilterChip } from "../Chip"
import { StorageSizeFilter } from "./StorageSizeFilter"
import { RatingFilter } from "./RatingFilter"
import { FastDeliveryFilter } from "./FastDeliveryFilter"
import { OutOfStockFilter } from "./OutOfStockFilter"
import { ClearFiltersButton } from "./ClearFiltersButton"
import { ScreenSizeFilter } from "./ScreenSizeFilter"
import { PriceRangeFilter2 } from "./PriceRangeFilter2"
import { BrandFilter } from "./BrandFilter"
import { SortFilter } from "./SortFilter"
import { DiscountFilter } from "./DiscountFilter"

export const Filters = (props: PaperProps) => {
  return (
    <Paper {...props}>
      <FilterChip />
      <SortFilter />
      <BrandFilter />
      <FastDeliveryFilter />
      <PriceRangeFilter2 />
      <RatingFilter />
      <DiscountFilter />
      <ScreenSizeFilter />
      <StorageSizeFilter />
      {/* <StorageTypeFilter /> */}
      {/* <PriceRangeFilter /> */}

      {/* <PriceAscFilter />
      <PriceDescFilter />
      <OutOfStockFilter /> */}

      <Box
        sx={{
          mt: 1,
        }}
      >
        <ClearFiltersButton />
      </Box>
    </Paper>
  )
}
