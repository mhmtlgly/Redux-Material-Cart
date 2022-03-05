import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    setDarkMode: (state: boolean) => !state,
  },
})

export const { setDarkMode } = themeSlice.actions

export default themeSlice.reducer
