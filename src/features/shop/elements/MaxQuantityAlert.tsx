import { useState } from "react"
import { Alert, AlertProps } from "@mui/material"

type MaximumQuantityAlert = {
  quantity: number
} & AlertProps

export const MaxQuantityAlert = ({
  quantity,
  ...props
}: MaximumQuantityAlert) => {
  const [isShowAlert, setIsShowAlert] = useState(false)
  return (
    <>
      {isShowAlert ? (
        <Alert
          color="error"
          icon={false}
          onClose={() => setIsShowAlert(false)}
          {...props}
        >
          {`maximum order quantity of ${quantity} reached.`}
        </Alert>
      ) : null}
    </>
  )
}
