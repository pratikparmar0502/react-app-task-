import { configureStore } from "@reduxjs/toolkit";
import marksheetReducer from "../redux/marksheetSlice";

export const store = configureStore({
  reducer: {
    marksheet: marksheetReducer,
  },
});
