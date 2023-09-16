import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./slices/countries.slice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
