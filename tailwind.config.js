/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teak': {
            '50': '#faf7f2',
            '100': '#f2eee2',
            '200': '#e5dbc3',
            '300': '#d4c39d',
            '400': '#bfa16e',
            '500': '#b58f5a',
            '600': '#a87d4e',
            '700': '#8c6542',
            '800': '#71523b',
            '900': '#5c4532',
            '950': '#312219',
        },    
      }
    },
  },
  plugins: [],
}

