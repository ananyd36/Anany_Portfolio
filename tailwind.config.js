/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      "nb-bg": "#FFFFFF",
      "nb-bg-alt": "#F5F5F0",
      "nb-bg-muted": "#EBEBEB",
      "nb-brand": "#FFDB33",
      "nb-brand-strong": "#FFCC00",
      "nb-brand-soft": "#FFF3C4",
      "nb-hero-bg": "#FDECA8",
      "nb-heading": "#000000",
      "nb-body": "#5A5A5A",
      "nb-border": "#000000",
      "nb-danger": "#E63946",
      "nb-success": "#16A34A",
    },
    fontFamily: {
      head: ['"Archivo Black"', "sans-serif"],
      sans: ['"Space Grotesk"', "sans-serif"],
    },
    boxShadow: {
      "nb-2xs": "1px 1px 0 0 #000000",
      "nb-xs": "2px 2px 0 0 #000000",
      "nb-sm": "3px 3px 0 0 #000000",
      "nb-md": "4px 4px 0 0 #000000",
      "nb-lg": "6px 6px 0 0 #000000",
      "nb-xl": "10px 10px 0 1px #000000",
      "nb-2xl": "16px 16px 0 1px #000000",
    },
    screens: {
      xs: "450px",
    },
  },
};
export const plugins = [];
