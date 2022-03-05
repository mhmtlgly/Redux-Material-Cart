import { Icon } from "@iconify/react"
import { IconButton } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { increaseQuantity } from "../cartSlice"
import { CartItemType } from "types"

type PropsT = {
  cartItem: CartItemType
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>
}

export const InreaseQuantity = ({ cartItem, setIsShowAlert }: PropsT) => {
  const dispatch = useAppDispatch()

  return (
    <IconButton
      onClick={
        cartItem.quantity < cartItem.stock
          ? () => dispatch(increaseQuantity(cartItem))
          : () => setIsShowAlert(true)
      }
    >
      <Icon icon="carbon:add-alt" />
    </IconButton>
  )
}
