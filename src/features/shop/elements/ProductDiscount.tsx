import { Box, useTheme } from "@mui/material"

export const ProductDiscount = ({ discount }: { discount: number }) => {
  const { palette } = useTheme()
  return (
    <>
      {discount ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            background: palette.error.dark,
            padding: 1,
            borderBottomLeftRadius: "50%",
            color: "white",
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          -{discount}%
        </Box>
      ) : null}
    </>
  )
}
