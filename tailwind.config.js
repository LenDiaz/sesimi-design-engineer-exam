/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/images/background.jpeg')",
      },
      colors: {
        "deep-teal": "#0F282D",
        "lime-green": "#D1FF3B",
        "light-sky-blue": "#7AF1FF",
        "purple": "#544AE5",
      },
      fontFamily: {
        sans: ["ES Rebond Grotesque", "sans-serif"],
      },
      screens: {
        "square-1080": {
          raw: "(min-width: 1080px) and (min-height: 1080px)"
        },
        "vertical-1080x1920": {
          raw: "(min-width: 1080px) and (min-height: 1920px)",
        },
      },
    },
  },
  plugins: [],
};
