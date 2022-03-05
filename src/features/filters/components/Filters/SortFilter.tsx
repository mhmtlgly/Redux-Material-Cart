import { Box, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { Accordion } from "components"
import { PriceAscFilter } from "./PriceAscFilter"
import { PriceDescFilter } from "./PriceDescFilter"

export const SortFilter = () => {
  return (
    <Accordion
      summary={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon icon="bx:sort-down" height={30} />
          <Typography>Sort</Typography>
        </Box>
      }
      details={
        <Box>
          <PriceAscFilter />
          <PriceDescFilter />
        </Box>
      }
    />
  )
}
