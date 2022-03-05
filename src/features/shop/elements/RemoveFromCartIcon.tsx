import { Icon } from "@iconify/react"
import { IconButton } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { removeFromCart } from "../cartSlice"
import { CartItemType } from "types"

export const RemoveFromCartIcon = (cartItem: CartItemType) => {
  const dispatch = useAppDispatch()

  return (
    <IconButton onClick={() => dispatch(removeFromCart(cartItem))}>
      <Icon icon="fluent:delete-24-regular" />
    </IconButton>
  )
}
