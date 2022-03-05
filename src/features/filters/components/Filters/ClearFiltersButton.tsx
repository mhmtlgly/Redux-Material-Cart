import { useSearchParams } from "react-router-dom"
import { Button, useTheme } from "@mui/material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { clearFilters } from "features/filters/filtersSlice"

export const ClearFiltersButton = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const [urlParams, setUrlParams] = useSearchParams()

  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(clearFilters())
        setUrlParams({})
      }}
      endIcon={<Icon icon="mdi:delete" />}
      size={"large"}
      fullWidth
      style={{
        background: theme.palette.warning.light,
      }}
    >
      clear filters
    </Button>
  )
}
