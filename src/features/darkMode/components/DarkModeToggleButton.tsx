import { Switch, IconButton } from "@mui/material"
import { LightMode, DarkMode } from "@mui/icons-material"
import { Icon } from "@iconify/react"

import { useAppDispatch } from "features/shared/hooks"
import { setDarkMode } from "../darkModeSlice"
import { useThemeState } from "../hooks"

export const DarkModeToggleButton = () => {
  const { darkMode } = useThemeState()

  const dispatch = useAppDispatch()
  return (
    <>
      <IconButton onClick={() => dispatch(setDarkMode())}>
        <Icon icon="mdi:theme-light-dark" color={"white"} height={35} />
      </IconButton>
      {/* <IconButton onClick={() => dispatch(setDarkMode())}>
        {theme ? (
          <Icon icon="mdi:white-balance-sunny" color="white" />
        ) : (
          <Icon icon="mdi:weather-night" color="white" />
        )}
      </IconButton> */}
      {/* <Switch
        checked={theme}
        onChange={() => dispatch(setDarkMode())}
        icon={<LightMode fontSize="small" />}
        checkedIcon={<DarkMode fontSize="small" />}
      /> */}
    </>
  )
}
