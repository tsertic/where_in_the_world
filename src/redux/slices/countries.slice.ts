import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
  status: "idle",
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

//TODO add types to state
export const selectAllCountries = (state: any) => state.countries.countries;
export const getFilteredCountries = (state: any) =>
  state.countries.filteredCountries;
export const getCountriesStatus = (state: any) => state.countries.status;
export const getCountriesError = (state: any) => state.countries.error;

export const countriesReducer = countriesSlice.reducer;
