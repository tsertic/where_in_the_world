"use client";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CountryCard } from "@/components/cards/CountryCard";
import {
  fetchCountries,
  resetShowItems,
  selectCountriesStatus,
  selectFilteredCountries,
  selectShowCountries,
  showNext12,
} from "@/redux/slices/countries.slice";

export const CountriesList = () => {
  const dispatch = useDispatch<any>();
  const filteredCountries = useSelector(selectFilteredCountries);
  const fetchingStatus = useSelector(selectCountriesStatus);
  const showCountries = useSelector(selectShowCountries);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(resetShowItems());
  }, []);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  //when in view add next 12 items , infinite scrolling
  useEffect(() => {
    if (inView) {
      dispatch(showNext12());
    }
  }, [inView]);
  return (
    <motion.div className="">
      <AnimatePresence>
        <motion.div
          layout
          layoutRoot
          className="container-wide countries-cards-grid gap-[40px] md:gap-[74px] justify-items-center"
        >
          <Suspense>
            {filteredCountries.slice(0, showCountries).map((country) => {
              return (
                <CountryCard key={country.name.common} cardData={country} />
              );
            })}
          </Suspense>

          {fetchingStatus === "success" && (
            <div ref={ref} onClick={() => dispatch(showNext12())}></div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
