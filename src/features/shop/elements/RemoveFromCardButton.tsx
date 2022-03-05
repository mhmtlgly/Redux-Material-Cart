import { Button, ButtonProps, useTheme } from "@mui/material"
import { Icon } from "@iconify/react"

import { CartItemType } from "types"
import { useAppDispatch } from "features/shared/hooks"
import { removeFromCart } from "../cartSlice"

type AddToCartButtonProps = {
  cartItem: CartItemType
} & ButtonProps

export const RemoveFromCardButton = ({
  cartItem,
  ...props
}: AddToCartButtonProps) => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  return (
    <Button
      style={{
        background: theme.palette.warning.light,
      }}
      onClick={() => dispatch(removeFromCart({ ...cartItem }))}
      disabled={cartItem.stock === 0}
      endIcon={<Icon icon="akar-icons:circle-minus" />}
      variant="contained"
      {...props}
    >
      remove
    </Button>
  )
}
