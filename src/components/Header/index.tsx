import { AppBar, Toolbar, IconButton, Box } from "@mui/material"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

import { Navigation } from "components"
import { CartIconLink } from "features/shop/elements"
import { DarkModeToggleButton } from "features/darkMode/components"

export const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Box sx={{ marginRight: "auto" }}>
          <Link to={"/"}>
            <IconButton size="large" edge="start">
              <Icon icon="file-icons:redux" color="white" />
            </IconButton>
          </Link>
        </Box>
        <Navigation />
        <CartIconLink />
        <DarkModeToggleButton />
      </Toolbar>
    </AppBar>
  )
}
