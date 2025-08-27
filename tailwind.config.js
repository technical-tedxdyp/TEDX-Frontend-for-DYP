/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if using Next.js -> "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tedxred: "#EB0028", // only hex/rgb colors
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
