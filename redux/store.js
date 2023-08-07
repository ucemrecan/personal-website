import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./features/buttonSlice";

export default configureStore({
  reducer: {
    navbarButtons: buttonReducer,
  },
});
