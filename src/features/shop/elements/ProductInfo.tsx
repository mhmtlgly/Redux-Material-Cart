import { Fragment, useState } from "react"
import { Tabs as MuiTabs, Tab, Box } from "@mui/material"

export const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(Number(newValue))
  }

  return (
    <Fragment>
      <MuiTabs value={activeTab} onChange={handleChange}>
        <Tab label="Details / Specifications" />
        <Tab label="Common Questions" />
        <Tab label="Customer Reviews" />
      </MuiTabs>
      <Box
        sx={{
          height: 400,
          padding: 5,
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        {activeTab === 0
          ? "Details / Specifications"
          : activeTab === 1
          ? "Common Questions"
          : "Customer Reviews"}
      </Box>
    </Fragment>
  )
}
