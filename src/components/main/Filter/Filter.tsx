"use client";
import { REGIONS } from "@/constants";
import { filterData } from "@/redux/slices/countries.slice";
import React, { useState, ChangeEventHandler, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
export const Filter = () => {
  const dispatch = useDispatch();

  const [regionValue, setRegionValue] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(filterData({ searchValue, regionValue }));
  }, [regionValue, searchValue]);
  const handleSelectChanges: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setRegionValue(e.target.value);
  };
  const handleSelectChanges2 = (value: string) => {
    setRegionValue(value);
    setOpenSelect(false);
  };
  return (
    <div className="container-wide px-normal flex max-lg:flex-col max-lg:gap-[40px] items-start justify-between">
      <div className="w-full max-w-[480px] flex gap-[24px] items-center bg-base-100 text-start rounded-[5px] py-[18px] pl-[32px] ">
        <AiOutlineSearch className="text-base-content w-[18px] h-[18px]" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a country..."
          className="outline-none text-input w-full bg-base-100"
        />
      </div>
      <div className=" relative bg-base-100 rounded-[5px] shadow-input">
        <div
          onClick={() => setOpenSelect(!openSelect)}
          className="flex items-center justify-between gap-[47px] w-[200px] cursor-pointer py-[18px] px-[22px] "
        >
          <p className="w-full text-start text-input">
            {regionValue ? regionValue : "Filter by Region"}
          </p>

          <MdKeyboardArrowDown className="absolute right-[10px] top-[50%] -translate-y-1/2 w-[20px] h-[20px]" />
        </div>
        <div
          className={`absolute text-input flex flex-col gap-[8px] text-start left-0 bottom-[-195px] bg-base-100 z-20 w-full py-[16px] rounded-[5px] ${
            openSelect ? "opacity-100" : "opacity-0"
          } shadow-input transition-universal`}
        >
          <p
            onClick={() => handleSelectChanges2("")}
            className="cursor-pointer w-full  pl-[24px] hover:bg-base-200/20 transition-universal"
          >
            All
          </p>
          {REGIONS.map((region) => {
            return (
              <p
                key={region}
                onClick={() => handleSelectChanges2(region)}
                className="cursor-pointer w-full  pl-[24px] hover:bg-base-200/20 transition-universal"
              >
                {region}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
