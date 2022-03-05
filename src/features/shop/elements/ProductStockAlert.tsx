// import { Alert } from "@mui/material"

// export const Stock = ({ stock }: { stock: number }) => {
//   return (
//     <>
//       {stock < 5 ? (
//         <Alert
//           severity={stock === 0 ? "error" : stock === 1 ? "warning" : "info"}
//           // variant={stock <= 1 ? "filled" : "standard"}
//           icon={false}
//         >
//           {stock > 0 ? `only ${stock} left` : "Out of stock"}
//         </Alert>
//       ) : null}
//     </>
//   )
// }

import { Alert } from "@mui/material"

export const ProductStockAlert = ({ stock }: { stock: number }) => {
  return (
    <>
      <Alert
        severity={stock === 0 ? "error" : stock === 1 ? "warning" : "info"}
        // variant={stock <= 1 ? "filled" : "standard"}
        icon={false}
        sx={{
          opacity: stock > 5 ? 0 : 1,
        }}
      >
        {stock < 1
          ? "Out of stock"
          : stock <= 5
          ? `only ${stock} left`
          : `stock: ${stock}`}
      </Alert>
    </>
  )
}
