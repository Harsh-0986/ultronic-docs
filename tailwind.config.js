module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        STIX: ['"STIX Two Text"', "serif"],
        Gowun: ['"Gowun Batang"', "serif"],
      },
    },
  },
};
