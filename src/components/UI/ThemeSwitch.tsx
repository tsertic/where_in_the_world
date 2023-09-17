"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    //check if there is prefers color scheme:dark and no theme in local storage , if true set light as starter theme
    if (
      !currentTheme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      if (!currentTheme) setTheme("light");
    }

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleSetThemeLight = () => {
    setTheme("light");
  };
  const handleSetThemeDark = () => {
    setTheme("dark");
  };
  return (
    <motion.div className="w-[84px] md:w-[108px] h-[22px] overflow-hidden cursor-pointer text-[12px] md:text-[16px] font-semibold leading-normal">
      <motion.div
        className={`w-full h-[44px] flex flex-col justify-between  `}
        animate={{ translateY: theme === "dark" ? -24 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-full flex justify-between items-center "
          onClick={handleSetThemeDark}
        >
          <BsMoonStarsFill /> <span>Dark Mode</span>
        </div>
        <div
          className="w-full flex justify-between items-center "
          onClick={handleSetThemeLight}
        >
          <BsSunFill /> <span>Light Mode</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThemeSwitch;
