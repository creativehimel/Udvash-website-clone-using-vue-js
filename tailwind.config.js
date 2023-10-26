/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        loto: ["Lato", "sans-serif"],
        baloo: ["Baloo Da 2", "sans-serif"],
        hind: ["Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
