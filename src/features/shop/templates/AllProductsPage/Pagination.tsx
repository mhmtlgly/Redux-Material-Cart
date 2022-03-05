import { Dispatch, SetStateAction, ChangeEvent } from "react"
import { Pagination as MuiPagination, PaginationProps } from "@mui/material"

import { useFilteredProducts } from "features/filters/hooks"

type PaginationType = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
} & PaginationProps

export const Pagination = ({ page, setPage, ...props }: PaginationType) => {
  const filteredProducts = useFilteredProducts()
  const itemsPerPage = 4

  return (
    <MuiPagination
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "center",
      }}
      defaultPage={1}
      siblingCount={0}
      showFirstButton
      showLastButton
      count={Math.ceil(filteredProducts.length / itemsPerPage)}
      variant="outlined"
      shape="rounded"
      color="primary"
      page={page}
      onChange={(_event: ChangeEvent<unknown>, value: number) => setPage(value)}
      {...props}
    />
  )
}
