/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: "#BF212E",
        azul: "#034C8C",
        azul_oscuro: "#074973"
      }
    },
  },
  plugins: [],
}

