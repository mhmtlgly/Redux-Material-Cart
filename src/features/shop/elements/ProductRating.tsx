import { Rating as MuiRating, Typography, Box } from "@mui/material"

export const ProductRating = ({
  ratingValue,
  numberOfRatings,
}: {
  ratingValue: number
  numberOfRatings: number
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <MuiRating
        name="text-feedback"
        value={ratingValue}
        readOnly
        precision={0.1}
        size={"small"}
      />
      <Typography variant={"body2"}>({numberOfRatings})</Typography>
    </Box>
  )
}
