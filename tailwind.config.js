/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sen': ['Sen', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        'Violet1': '#9BA4ED',
        'Blue1': '#5221E6',
        'Gray1':'#3E3C3C',
      },
      animation: {
        'bounce3': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

