/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
}

