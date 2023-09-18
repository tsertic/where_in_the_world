import { CountryButton } from "@/components/UI/CountryButton";
import {
  filterBorderCountries,
  getNativeNamesArray,
  makeReadableNumber,
} from "@/lib";
import { selectAllCountries } from "@/redux/slices/countries.slice";
import { ICountry } from "@/types/index.t";
import React from "react";
import { useSelector } from "react-redux";
interface ICountryInfo {
  countryData: ICountry;
}
export const CountryInfo: React.FC<ICountryInfo> = ({ countryData }) => {
  const allCountries = useSelector(selectAllCountries);

  const {
    name,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    population,
  } = countryData;
  const borderCountries = filterBorderCountries(allCountries, borders);

  const listOfNativeNames = getNativeNamesArray(name.nativeName);
  const readablePopulation = makeReadableNumber(population);
  return (
    <div className=" max-w-[600px] w-full flex flex-col justify-center">
      <h1 className="text-headingLMobile lg:text-headingL mb-[16px] lg:mb-[23px]">
        {name.common}
      </h1>
      <div className="font-bodyS lg:font-bodyM flex flex-col lg:flex-row justify-between mb-[34px] lg:mb-[68px]">
        <div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Native Name: </span>
            <ul>
              {listOfNativeNames &&
                listOfNativeNames.map((value) => {
                  return (
                    <li className="" key={value}>
                      {listOfNativeNames.length <= 1 ? "" : "•"} {value}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Population: </span>
            <p>{readablePopulation}</p>
          </div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Region:</span>
            <p>{region}</p>
          </div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Sub Region:</span>
            <p>{subregion}</p>
          </div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Capital:</span>
            <p>{capital}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Top Level Domain: </span>
            <ul>
              {tld &&
                tld.map((domain) => {
                  return (
                    <li key={domain}>
                      {tld.length <= 1 ? "" : "•"}
                      {domain}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="flex gap-[5px] max-lg:mb-[32px]">
            <span className="font-bold">Currencies: </span>
            <ul>
              {currencies &&
                Object.values(currencies).map((currency) => {
                  return (
                    <li key={currency.name}>
                      {Object.values(currencies).length <= 1 ? "" : "•"}{" "}
                      {currency.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="flex gap-[5px]">
            <span className="font-bold">Languages:</span>
            <ul>
              {languages &&
                Object.values(languages).map((language) => {
                  return (
                    <li key={language}>
                      {Object.values(languages).length <= 1 ? "" : "•"}{" "}
                      {language}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="font-bodyS lg:font-bodyM flex w-full gap-[16px]">
        <p className="font-bold min-w-fit">Boarder Countries:</p>
        <div className="w-full flex flex-wrap max-lg:flex-col max-lg:items-start  gap-[10px]">
          {borderCountries.map((country) => {
            return <CountryButton country={country} key={country.cca3} />;
          })}
        </div>
      </div>
    </div>
  );
};
