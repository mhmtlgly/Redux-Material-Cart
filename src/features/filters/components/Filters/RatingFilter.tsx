import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"
import { Rating, Box, Typography } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { setRating } from "features/filters/filtersSlice"
import { useFilteredProducts, useFiltersState } from "features/filters/hooks"
import { Accordion } from "components"

export const RatingFilter = () => {
  const dispatch = useAppDispatch()
  const { filters } = useFiltersState()
  const filteredProducts = useFilteredProducts()

  const [urlParams, setUrlParams] = useSearchParams()
  const currentParams = Object.fromEntries(urlParams)

  const numberOfRatings = filteredProducts.filter(
    (p) => p.rating.ratingValue >= filters.rating
  ).length

  return (
    <>
      <Accordion
        summary={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Icon icon="mdi:star" height={30} />
            <Typography>Rating</Typography>
          </Box>
        }
        details={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Rating
              name="simple-controlled"
              value={filters.rating}
              onChange={(
                event: SyntheticEvent<Element, Event>,
                newValue: number | null
              ) => {
                dispatch(setRating(Number(newValue)))
                // setSortByRating(Number(event.target?.value))
                setUrlParams({
                  ...currentParams,
                  // rating: String(newValue)
                  // rating: urlParams.get("rating") ?? String(newValue),
                  rating: String(newValue),
                })
              }}
            />
            <p>({numberOfRatings})</p>
          </Box>
        }
      />
    </>
  )
}
