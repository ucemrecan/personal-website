import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkModeEnabled: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const isDarkModeEnabled = (state) => state.darkMode.isDarkModeEnabled;

export default darkModeSlice.reducer;
