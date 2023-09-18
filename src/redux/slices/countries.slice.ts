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
    resetShowItems: (state) => {
      state.show = 12;
    },
    filterData: (state, { payload }) => {
      let updatedCountries = state.countries;
      if (payload.regionValue === "") {
      } else {
        updatedCountries = state.countries.filter(
          (country) => country.region === payload.regionValue
        );
      }
      if (payload.searchValue) {
        updatedCountries = updatedCountries.filter((country) => {
          const stringToInclude = payload.searchValue.toLowerCase().trim();
          if (
            country.name.common.toLowerCase().includes(stringToInclude) ||
            country.name.official.toLowerCase().includes(stringToInclude)
          ) {
            return country;
          }
        });
      }
      state.filteredCountries = updatedCountries;
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
export const { showNext12, filterData, resetShowItems } =
  countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
