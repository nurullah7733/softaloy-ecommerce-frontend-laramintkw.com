/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      "6xl": { max: "2880px" },
      "5xl": { max: "2560px" },
      "4xl": { max: "1919px" },
      "3xl": { max: "1535px" },
      "2xl": { max: "1279px" },
      xl: { max: "1139px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "575px" },
      xxs: { max: "479px" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
