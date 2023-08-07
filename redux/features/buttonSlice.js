import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "navbarButtons",
  initialState: {
    isDarkModeEnabled: false,
    isMenuActive: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
    toggleMenu: (state) => {
      state.isMenuActive = !state.isMenuActive;
    },
  },
});

export const { toggleDarkMode, toggleMenu } = buttonSlice.actions;

export const isDarkModeEnabled = (state) =>
  state.navbarButtons.isDarkModeEnabled;
export const isMenuActive = (state) => state.navbarButtons.isMenuActive;

export default buttonSlice.reducer;
