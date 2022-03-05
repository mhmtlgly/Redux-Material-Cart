import { Icon } from "@iconify/react"
import { IconButton } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { decreaseQuantity } from "../cartSlice"
import { CartItemType } from "types"

type PropsT = {
  cartItem: CartItemType
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>
}

export const DecreaseQuantity = ({ cartItem, setIsShowAlert }: PropsT) => {
  const dispatch = useAppDispatch()

  return (
    <IconButton
      onClick={() => {
        dispatch(decreaseQuantity(cartItem))
        setIsShowAlert(false)
      }}
    >
      <Icon icon="akar-icons:circle-minus" />
    </IconButton>
  )
}
