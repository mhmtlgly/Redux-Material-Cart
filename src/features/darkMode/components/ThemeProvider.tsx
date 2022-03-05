import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { ReactNode } from "react"

import { useThemeState } from "../hooks"

export const Theme = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useThemeState()
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
