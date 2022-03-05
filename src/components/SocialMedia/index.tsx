import { AppBar, Toolbar, IconButton, Box } from "@mui/material"
import { Icon } from "@iconify/react"

export const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <IconButton>
        <Icon icon="akar-icons:github-fill" height={35} width={35} />
      </IconButton>

      <IconButton>
        <Icon icon="bi:twitter" height={35} width={35} />
      </IconButton>
    </Box>
  )
}
