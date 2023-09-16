import ThemeSwitch from "@/components/UI/ThemeSwitch";
import React from "react";

export const Navigation = () => {
  return (
    <header className="w-full nav-shadow py-[30px] md:py-[23px] bg-base-100 ">
      <div className="container-wide flex justify-between items-center px-small">
        <h2 className=" text-headingMMobile md:text-headingM ">
          Where in the World?
        </h2>
        <ThemeSwitch />
      </div>
    </header>
  );
};
