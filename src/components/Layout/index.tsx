import React, { Fragment } from "react"
import { CssBaseline, Box } from "@mui/material"

import { Footer, Header } from ".."

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
      <Footer />
    </Fragment>
  )
}
