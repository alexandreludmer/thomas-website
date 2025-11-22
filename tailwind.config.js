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
          DEFAULT: '#0f172a', // Deep Navy Blue
          light: '#1e293b',
          dark: '#020617',
        },
        secondary: {
          DEFAULT: '#cca43b', // Muted Gold / Brass
          light: '#eecb68',
        },
        surface: '#f8fafc', // Off-White / Alabaster
        text: {
          DEFAULT: '#334155', // Dark Slate
          dark: '#1e293b',
          light: '#64748b',
        },
        catalan: {
          red: '#DA121A', // Sang
          yellow: '#FCDD09', // Or
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
