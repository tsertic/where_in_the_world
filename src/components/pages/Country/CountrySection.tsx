import React from "react";
import Image from "next/image";
import { ICountry } from "@/types/index.t";
import { Button } from "@/components/UI/Button";
import { BiArrowBack } from "react-icons/bi";
import { CountryInfo } from "./CountryInfo";
interface ICountrySection {
  countryData: ICountry;
}
export const CountrySection: React.FC<ICountrySection> = ({ countryData }) => {
  const { flags, name } = countryData;

  return (
    <section className="container-wide px-normal pt-[40px] md:pt-[80px]">
      <div className="mb-[64px] md:mb-[80px]">
        <Button href="/" ariaLabel="back to homepage">
          <span className="flex items-center gap-[8px]">
            <BiArrowBack /> Back
          </span>
        </Button>
      </div>
      <div className="flex flex-col max-lg:items-center lg:flex-row justify-between max-lg:gap-[20px] xl:gap-0">
        <div className="h-[229px] md:h-[400px] w-full max-w-[560px]  overflow-hidden rounded-[10px] shadow-flagImage">
          <Image
            src={flags.svg}
            width={580}
            height={400}
            alt={`flag of ${name.official}`}
            className=" h-full object-cover"
          />
        </div>
        <CountryInfo countryData={countryData} />
      </div>
    </section>
  );
};
