import { Box, useTheme } from "@mui/material"

import { SocialMedia } from "components"
import { Copyright } from "./Copyright"

export const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        // background: theme.palette.grey["50"],
        padding: 3,
        paddingBottom: 1,
      }}
    >
      <SocialMedia />
      <Copyright />
    </Box>
  )
}
