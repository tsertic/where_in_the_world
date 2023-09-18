import { ICountry } from "@/types/index.t";
import React from "react";
import Link from "next/link";
import { rmWhiteAndLowercase } from "@/lib";

interface ICountryButton {
  country: ICountry;
}
export const CountryButton: React.FC<ICountryButton> = ({ country }) => {
  const slug = rmWhiteAndLowercase(country.name.official);
  return (
    <Link
      href={`/country/${slug}`}
      aria-label={`link to country ${country.name.common}`}
      className="inline-block bg-base-100 text-base-content rounded-[2px] py-[5px] px-[27px] shadow-countryButton text-[12px] lg:text-[14px] font-light leading-normal border-[2px] border-transparent hover:border-base-content/20 transition-universal"
    >
      {country.name.common}
    </Link>
  );
};
