import { ICountry } from "@/types/index.t";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { makeReadableNumber } from "@/lib";
interface ICountryCard {
  cardData: ICountry;
}
export const CountryCard: React.FC<ICountryCard> = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { coatOfArms, name, population, region, capital, flags } = cardData;

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layoutId={name.common}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className=" group w-full max-w-[264px] pb-[40px] flex flex-col cursor-pointer bg-base-100 rounded-[5px] overflow-hidden card-shadow test-border"
    >
      <div className="  h-[160px] w-full overflow-hidden relative">
        <Image
          src={flags.svg}
          width={264}
          height={160}
          loading="lazy"
          alt={cardData.name.common}
          className="w-full h-full object-cover"
        />

        {coatOfArms.svg && (
          <Suspense>
            <motion.div
              initial={{ display: "none", opacity: 0 }}
              animate={
                isHovered
                  ? { display: "block", opacity: 0.5 }
                  : { display: "none", opacity: 0 }
              }
              transition={{
                duration: 0.5,
              }}
              className="p-[10px] w-full left-0 h-full absolute top-0  "
            >
              <Image
                loading="lazy"
                src={coatOfArms.svg}
                width={264}
                height={160}
                alt={cardData.name.common}
                className="z-10 object-contain w-full h-full "
              />
            </motion.div>
          </Suspense>
        )}
      </div>
      <div className="pt-[24px] pl-[24px] text-start">
        <h2 className="text-headingCard mb-[16px]">{name.official}</h2>
        <div className="flex flex-col justify-between gap-[8px] text-bodyCard">
          <p>
            <span className=" font-semibold">Population: </span>
            {makeReadableNumber(population)}
          </p>
          <p>
            <span className=" font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className=" font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
