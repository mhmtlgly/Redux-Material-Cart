import { Typography, Box } from "@mui/material"

import { Icon } from "@iconify/react"

export const ProductDeliveryTime = ({
  deliveryTime,
  stock,
}: {
  deliveryTime: number
  stock: number
}) => {
  return (
    <>
      {stock === 0 ? null : deliveryTime === 1 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Next day delivery</Typography>
          <Icon icon="fa-solid:shipping-fast" color="red" />
        </Box>
      ) : (
        `Delivery: ${deliveryTime} - ${
          deliveryTime + Math.round(deliveryTime * 0.5)
        } days`
      )}
    </>
  )
}
