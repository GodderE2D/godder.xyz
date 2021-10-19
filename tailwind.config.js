module.exports = {
  mode: "jit",

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'

  // typography: {
  //   default: {
  //     css: {
  //       pre: false,
  //       code: false,
  //       'pre code': false,
  //       'code::before': false,
  //       'code::after': false
  //     },
  //   }
  // },

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: ["emerald"],
  },
};
