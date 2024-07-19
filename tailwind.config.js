/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DFDCD8',
        secondary: '#D9D9D9',
        green: {
          light: '#949978',
          dark: '3E5C47',
        }
      },
    },
  },
  plugins: [],
}

