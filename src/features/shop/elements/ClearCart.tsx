import { Button } from "@mui/material"

import { useAppDispatch } from "features/shared/hooks"
import { clearCart } from "../cartSlice"

export const ClearCart = () => {
  const dispatch = useAppDispatch()

  return (
    <Button variant="outlined" onClick={() => dispatch(clearCart())}>
      clear cart
    </Button>
  )
}
