import { getAllCountries } from "@/api/countries";
import { ICountry, TCountrieFetchingStatus } from "@/types/index.t";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INITIAL_DATA } from "@/constants/initialCountriesData";
interface IInitialState {
  countries: ICountry[];
  filteredCountries: ICountry[];
  status: TCountrieFetchingStatus;
  error: string | null;
  show: number;
}
const initialState: IInitialState = {
  //@ts-ignore TODO:improve initial data to not have all fields
  countries: INITIAL_DATA,
  //@ts-ignore
  filteredCountries: INITIAL_DATA,
  status: "idle",
  error: null,
  show: 12,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    try {
      const allCountries = await getAllCountries();
      return allCountries;
    } catch (error) {
      let msg = "";
      if (error instanceof Error) msg = error.message;
      return msg;
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    showNext12: (state) => {
      state.show += 12;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, { payload }: { payload: ICountry[] }) => {
          state.status = "success";

          state.countries = payload;
          state.filteredCountries = payload;
        }
      )
      .addCase(fetchCountries.rejected, (state, { error }) => {
        state.status = "error";
        if (!error) state.error = "Error";
        state.error = error.message ? error.message : "Error";
      });
  },
});

//useSelector selectors
export const selectAllCountries = (state: {
  countries: { countries: ICountry[] };
}) => state.countries.countries;
export const selectFilteredCountries = (state: {
  countries: { filteredCountries: ICountry[] };
}) => state.countries.filteredCountries;
export const selectCountriesStatus = (state: {
  countries: { status: TCountrieFetchingStatus };
}) => state.countries.status;
export const selectCountriesError = (state: {
  countries: { error: string | null };
}) => state.countries.error;
export const selectShowCountries = (state: { countries: { show: number } }) =>
  state.countries.show;
export const { showNext12 } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
