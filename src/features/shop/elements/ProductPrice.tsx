import { Typography, Box, BoxProps } from "@mui/material"

import { amountToEuro } from "utils"

type ProductPriceProps = {
  amount: number
  discount: number
} & BoxProps

export const ProductPrice = ({
  amount,
  discount,
  ...props
}: ProductPriceProps) => {
  return (
    <Box {...props}>
      <Typography
        sx={{
          // color: discount ? (theme) => theme.palette.error.dark : null,
          textDecoration: discount ? "line-through" : "none",
          fontSize: discount ? 14 : 18,
        }}
      >
        {amountToEuro(amount)}
      </Typography>
      {discount ? (
        <Typography
          sx={{
            color: (theme) => theme.palette.error.dark,
            fontWeight: 900,
            fontSize: 18,
            textDecoration: "underline",
          }}
        >
          {amountToEuro((amount * (100 - discount)) / 100)}
        </Typography>
      ) : null}
    </Box>
  )
}
