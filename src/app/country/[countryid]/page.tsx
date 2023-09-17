"use client";
import { LoadingSpinner } from "@/components/UI/LoadingSpinner";
import { rmWhiteAndLowercase } from "@/lib";
import {
  fetchCountries,
  selectAllCountries,
  selectCountriesStatus,
} from "@/redux/slices/countries.slice";
import { useRouter } from "next/navigation";
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
    <>
      {selectedCountry && (
        <div className="flex flex-col md:flex-row">
          <div>
            <Image
              src={selectedCountry.flags.svg}
              width={580}
              height={400}
              alt={`flag of ${selectedCountry.name.official}`}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default CountryPage;
