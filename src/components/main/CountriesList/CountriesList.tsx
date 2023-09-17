"use client";
import { CountryCard } from "@/components/cards/CountryCard";
import {
  fetchCountries,
  selectCountriesStatus,
  selectFilteredCountries,
  selectShowCountries,
  showNext12,
} from "@/redux/slices/countries.slice";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
export const CountriesList = () => {
  const dispatch = useDispatch<any>();
  const countries = useSelector(selectFilteredCountries);
  const fetchingStatus = useSelector(selectCountriesStatus);
  const showCountries = useSelector(selectShowCountries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <motion.div className="">
      <AnimatePresence>
        <motion.div
          layout
          layoutRoot
          transition={{ duration: 0.5 }}
          className="container-wide countries-cards-grid gap-[40px] md:gap-[74px] test-border justify-items-center"
        >
          {fetchingStatus === "pending" &&
            countries.map((country) => {
              return (
                <CountryCard key={country.name.common} cardData={country} />
              );
            })}
          {fetchingStatus === "success" && (
            <Suspense>
              {countries.slice(0, showCountries).map((country) => {
                return (
                  <CountryCard key={country.name.common} cardData={country} />
                );
              })}
            </Suspense>
          )}
          {fetchingStatus === "success" && (
            <div onClick={() => dispatch(showNext12())}>Load More</div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
