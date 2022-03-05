import { useState } from "react"
import { Box, Alert, useTheme } from "@mui/material"
import { Link } from "react-router-dom"

import { amountToEuro } from "utils"
import { CartItemType } from "types"
import { QuantityInput } from "./QuantityInput"
import { RemoveFromCartIcon } from "./RemoveFromCartIcon"
import { DecreaseQuantity } from "./DecreaseQuantity"
import { InreaseQuantity } from "./IncreaseQuantity"

export const CartItem = (cartItem: CartItemType) => {
  const theme = useTheme()

  const [isShowAlert, setIsShowAlert] = useState(false)
  return (
    <Box
      sx={{
        maxWidth: 300,
        boxShadow: "0 0 10px rgb(0 0 0 / 15%)",
        padding: 3,
        mt: 3,
      }}
    >
      <img src={cartItem.img} alt="" width="100%" />
      <Link
        to={`/product/${cartItem.id}`}
        style={{ textDecoration: "none", color: theme.palette.text.primary }}
      >
        <h4>{cartItem.model}</h4>
      </Link>
      <p>Quantity: {cartItem.quantity} </p>
      <p>{amountToEuro(cartItem.price)}</p>
      <QuantityInput {...cartItem} />
      <DecreaseQuantity
        cartItem={cartItem}
        setIsShowAlert={() => setIsShowAlert(false)}
      />
      <InreaseQuantity
        cartItem={cartItem}
        setIsShowAlert={() => setIsShowAlert(true)}
      />
      <RemoveFromCartIcon {...cartItem} />
      {isShowAlert ? (
        <Alert color="error" icon={false} onClose={() => setIsShowAlert(false)}>
          {`maximum order quantity of ${cartItem.stock} reached.`}
        </Alert>
      ) : null}
    </Box>
  )
}
