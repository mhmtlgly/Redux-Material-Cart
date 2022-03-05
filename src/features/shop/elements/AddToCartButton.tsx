import { Button, ButtonProps, useTheme } from "@mui/material"
import { Icon } from "@iconify/react"

import { CartItemType } from "types"
import { useAppDispatch } from "features/shared/hooks"
import { addToCart } from "../cartSlice"

type AddToCartButtonProps = {
  cartItem: CartItemType
} & ButtonProps

export const AddToCartButton = ({
  cartItem,
  ...props
}: AddToCartButtonProps) => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  return (
    <Button
      style={{
        background: theme.palette.success.light,
      }}
      onClick={() => dispatch(addToCart({ ...cartItem }))}
      disabled={cartItem.stock === 0}
      endIcon={<Icon icon="akar-icons:cart" color="white" />}
      {...props}
    >
      add to cart
    </Button>
  )
}
