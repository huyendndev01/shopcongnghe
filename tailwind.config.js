/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "height-home": "calc(100vh - 64px - 270px)",
      },
      textColor: {
        footer: "#131313",
      },
    },
  },
  plugins: [],
};
