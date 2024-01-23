/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simulation-profile': "linear-gradient(.25turn, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)",
      },
    },
  },
  plugins: [],
}

