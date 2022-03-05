import { FormControl, MenuItem, Select, InputLabel } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { setQuantity } from "../cartSlice"
import { CartItemType } from "types"

export const QuantityInput = (cartItem: CartItemType) => {
  const dispatch = useAppDispatch()

  return (
    <FormControl
      variant="outlined"
      sx={{
        width: 75,
      }}
    >
      <InputLabel id="cartItemQuantity">Quantity</InputLabel>
      <Select
        labelId="cartItemQuantity"
        id="cartItemQuantity"
        value={cartItem.quantity}
        label="Quantity"
        onChange={(e) =>
          dispatch(
            setQuantity({
              id: cartItem.id,
              qty: Number(e.target.value),
            })
          )
        }
      >
        {Array.from({ length: cartItem.stock }, (_, index) => (
          <MenuItem key={index} value={index + 1}>
            {index + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
