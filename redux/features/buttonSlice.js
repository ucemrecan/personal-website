import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "navbarButtons",
  initialState: {
    isDarkModeEnabled: false,
    isMenuActive: false,
    isTurkishLangActive: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
    toggleMenu: (state) => {
      state.isMenuActive = !state.isMenuActive;
    },
    toggleLang: (state) => {
      state.isTurkishLangActive = !state.isTurkishLangActive;
    },
  },
});

export const { toggleDarkMode, toggleMenu, toggleLang } = buttonSlice.actions;

export const isDarkModeEnabled = (state) =>
  state.navbarButtons.isDarkModeEnabled;
export const isMenuActive = (state) => state.navbarButtons.isMenuActive;
export const isTurkishLangActive = (state) =>
  state.navbarButtons.isTurkishLangActive;

export default buttonSlice.reducer;
