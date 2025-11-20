/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: "#ffc0cb",
        customBlue: "#c0fff4",
      },
      screens: {
        "short-screen": { raw: "(max-height: 700px)" },
      },
    },
  },
  plugins: [],
};
