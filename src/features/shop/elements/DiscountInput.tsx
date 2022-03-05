import { useState } from "react"
import { Button, TextField } from "@mui/material"

import { useDiscountCodes } from "features/shared/api"
import { setDiscount } from "features/shop/cartSlice"
import { useAppDispatch } from "features/shared/hooks"

export const DiscountInput = () => {
  const dispatch = useAppDispatch()
  const { discountCodes } = useDiscountCodes()
  const [discountCode, setDiscountCode] = useState("")
  const [checkDiscountCode, setCheckDiscountCode] = useState(false)

  const currentDiscountCode = discountCodes.find(
    (dCode) => dCode.code.toUpperCase() === discountCode
  )

  return (
    <>
      <TextField
        onChange={(e) => {
          setCheckDiscountCode(false)
          setDiscountCode(e.target.value.toUpperCase())
        }}
        error={checkDiscountCode && !currentDiscountCode}
        id="outlined-error-helper-text"
        label="Discount Code"
        helperText={
          checkDiscountCode &&
          !currentDiscountCode &&
          "Discount Code is not valid."
        }
        value={discountCode}
      />
      <Button
        onClick={() => {
          setCheckDiscountCode(true)
          currentDiscountCode && dispatch(setDiscount(currentDiscountCode))
        }}
      >
        apply discount
      </Button>
    </>
  )
}
