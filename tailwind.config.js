/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      blue: {
        50: "#f0f8ff",
        100: "#e0effe",
        200: "#b9e0fe",
        300: "#7cc7fd",
        400: "#36acfa",
        500: "#0c91eb",
        600: "#0078d4",
        700: "#286dcd",
        800: "#2658a7",
        900: "#244c84",
        950: "#203961",
      },
      purple: {
        50: "#fbf5ff",
        100: "#f5e8ff",
        200: "#edd4ff",
        300: "#d59dff",
        400: "#b991ef",
        500: "#9e67e5",
        600: "#8747d6",
        700: "#7335bb",
        800: "#5c2d91",
        900: "#51287b",
        950: "#34115a",
      },
      cyan: {
        50: "#ebf8ff",
        100: "#cdfbff",
        200: "#a1f4ff",
        300: "#50e6ff",
        400: "#1ad3f6",
        500: "#00b6dc",
        600: "#0190b9",
        700: "#097395",
        800: "#115d79",
        900: "#134d66",
        950: "#063246",
      },
      neutral: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#9b9b9b",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
    },
    screens: {
      "2xs": "320px",
      // => @media (min-width: 320px) { ... }

      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        segoe: "Segoe",
      },
      borderRadius: {
        "3xs": "10px",
        "6xs": "7px",
        xl: "20px",
        "8xs": "5px",
        mini: "15px",
        "10xs-4": "2.4px",
        "105xl": "124px",
      },
      fontSize: {
        xs: "12px",
        base: "16px",
        sm: "14px",
        "3xl": "22px",
        "19xl": "19px",
        "5xl": "24px",
        "23xl": "23px",
        "29xl": "48px",
        "21xl": "40px",
        "11xl": "30px",
        xl: "20px",
        "9xl": "28px",
        mini: "15px",
        lg: "18px",
        "15xl": "34px",
        "16xl": "35px",
        "17xl": "36px",
        "45xl": "64px",
        "13xl": "32px",
        "base-4": "15.4px",
        "26xl": "45px",
      },
    },
  },
  plugins: [],
};
