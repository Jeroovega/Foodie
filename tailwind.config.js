const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cafeteria': 'url(public/categorias/cafeteria.jpg)',
      }
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
}