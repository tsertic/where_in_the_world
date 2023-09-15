import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        nav: [
          "13px",
          {
            fontWeight: "500",
            lineHeight: "normal",
          },
        ],
        navMobile: [
          "16px",
          {
            fontWeight: "700",
            letterSpacing: "-0.286px",
            lineHeight: "normal",
          },
        ],
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
        button: "0 15px 15px -10px #FF9F8E",
      },
    },
  },
  plugins: [],
};
export default config;
