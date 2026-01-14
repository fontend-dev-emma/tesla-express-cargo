/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F9F9F9",
          100: "#F1F2F2",
          200: "#E0E0E0",
          300: "#C8C8C8",
          400: "#666360",
          500: "#808080",
          600: "#666666",
          700: "#4B4148",
          800: "#262626",
          900: "#121212",
          950: "#0B0A0C",
        },
        accent: {
          50: "#F0FAF9",
          100: "#CCF2EE",
          200: "#99E5DD",
          300: "#66D8CC",
          400: "#33CBBA",
          500: "#00BEA9",
          600: "#009E8D",
          700: "#007E71",
          800: "#005F55",
          900: "#00413A",
          950: "#007F73",
        },
      },
    },
  },
  plugins: [],
};
