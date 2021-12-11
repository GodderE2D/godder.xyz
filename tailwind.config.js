const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./**/*.html"],
    options: {
      safelist: [/data-theme$/],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
  theme: {
    extend: {
      colors: require("daisyui/colors"),
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.5rem",
              lineHeight: 1,
              fontWeight: 800,
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
