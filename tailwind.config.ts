import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
        "neutral-content": "rgb(var(--color-neutral-content) / <alpha-value>)",
      },
      fontSize: {
        footerLink: [
          "15px",
          {
            lineHeight: "normal",
            letterSpacing: "-0.234px",
            fontWeight: "400",
          },
        ],
        button: [
          "15px",
          {
            lineHeight: "normal",
            letterSpacing: "-0.234px",
            fontWeight: "400",
          },
        ],
        bodyM: [
          "16px",
          { lineHeight: "26px", fontWeight: "400", letterSpacing: "-.2px" },
        ],
        bodyS: ["14px", { lineHeight: "28px", fontWeight: "400" }],
        bodyCard: ["14px", { lineHeight: "16px" }],
        headingXL: [
          "56px",
          { lineHeight: "64px", fontWeight: "700", letterSpacing: "-2px" },
        ],
        headingL: [
          "32px",
          {
            lineHeight: "normal",
            fontWeight: "800",
          },
        ],
        headingLMobile: [
          "22px",
          {
            lineHeight: "normal",
            fontWeight: "800",
          },
        ],

        headingM: [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "800",
          },
        ],
        headingMMobile: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "800",
          },
        ],

        headingCard: [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "800",
          },
        ],
        input: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        inputMobile: ["12px", { lineHeight: "20px", fontWeight: "400" }],
      },
      boxShadow: {
        button: "0 0 7px 0px rgba(0,0,0,.29)",
        flagImage: "0 0 14px 4px rgba(0,0,0,.03)",
        countryButton: "0 0 4px 1px rgba(0,0,0,.1)",
        input: "0 2px 9px 0px rgba(0,0,0,.05)",
      },
    },
  },
  plugins: [],
};
export default config;
