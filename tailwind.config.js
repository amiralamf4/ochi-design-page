/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['"Founders Grotesk"'], // custom font ka naam
        neuemontreal: ['"NeueMontreal"'], // custom font ka naam
      },
    },
  },
  plugins: [],
}