import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/testSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
