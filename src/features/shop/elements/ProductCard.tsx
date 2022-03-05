import { Paper, PaperProps } from "@mui/material"

export const ProductCard = (props: PaperProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        position: "relative",
        padding: 3,
        // display: "grid",
        // gridTemplateRows: "1fr",
        // gap: 2,
        // width: "clamp(200px, 100%,300px)",
      }}
      {...props}
    />
  )
}
