import axios from "axios";

const coutnriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const getAllCountries = async () => {
  const countries = await coutnriesApi.get("/all");
  return countries.data;
};
