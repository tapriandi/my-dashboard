import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#525CCF",
        purple1: "#C7CAFF",
        gray: "#F7F6FB",
        black: '#100E14',
        orange: '#FEA70F',
        orange2: '#FDDFBF'
      },
    },
  },
  screens: {
    "2xl": { max: "1535px" },
    xl: { max: "1279px" },
    lg: { max: "1023px" },
    md: { max: "767px" },
    sm: { max: "639px" },
  },
  plugins: [],
};
export default config;
