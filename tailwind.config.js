/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#991F26', // Deep Catalan Red (Sang)
          light: '#B83239',
          dark: '#701218',
        },
        secondary: {
          DEFAULT: '#E5BE01', // Catalan Gold (Or)
          light: '#F4D03F',
        },
        surface: '#F9F9F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
