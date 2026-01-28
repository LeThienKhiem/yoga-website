import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#FEFCE8",
        primary: "#658C5A",
        "primary-dark": "#4A6741",
        secondary: "#EAB308",
        surface: "#FAFAF0",
        "text-main": "#2C3E26",
      },
    },
  },
  plugins: [],
};

export default config;
