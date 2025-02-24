/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      // primary: "#050816",
      // secondary: "#aaa6c3",
      tertiary: "#151030", //og light purple,
      primary: "#000000",
      secondary: "#918987", //"#544f51",


      //tertiary: "#dba039",//orange-title
      //tertiary: "#262526",//grey,
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      black: "#000000",
      lightOrange: "#2b2c36",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/jarvis2.4.png')",
    },
  },
};
export const plugins = [];