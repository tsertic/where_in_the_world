"use client";
import { LoadingSpinner } from "@/components/UI/LoadingSpinner";
import { CountrySection } from "@/components/pages/Country/CountrySection";
import { rmWhiteAndLowercase } from "@/lib";
import {
  fetchCountries,
  selectAllCountries,
  selectCountriesStatus,
} from "@/redux/slices/countries.slice";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
interface ICoutnryPage {
  params: {
    countryid: string;
  };
}
const CountryPage: React.FC<ICoutnryPage> = ({ params: { countryid } }) => {
  const dispatch = useDispatch<any>();
  const countries = useSelector(selectAllCountries);
  const status = useSelector(selectCountriesStatus);
  useEffect(() => {
    //12 countries are prefetched as initial data,located in constants folder
    if (countries.length < 20) {
      dispatch(fetchCountries());
    }
  }, [countries]);
  const selectedCountry = countries.find(
    (country) => rmWhiteAndLowercase(country.name.official) === countryid
  );

  if (status === "pending" || status === "idle") {
    return (
      <div className="flex justify-center items-center pt-[100px]">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex justify-center items-center pt-[100px]">
        <h1 className="text-2xl text-center">Something went wrong 😶</h1>
      </div>
    );
  }
  return (
    <main className="pb-[60px]">
      {selectedCountry && <CountrySection countryData={selectedCountry} />}
    </main>
  );
};
export default CountryPage;
