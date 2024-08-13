/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { marginTop: '50%', height: '50%', opacity: '0'},
          '100%': {marginTop: '0%', height: '50%', opacity: '1'},
        },
      },
      animation: {
        'slide-up': 'slide-up 2s forwards'
      }
    },
  },
  plugins: [],
}

