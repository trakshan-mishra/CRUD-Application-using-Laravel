/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#0a0a0a',
        'neon': '#00ff88',
        'plasma': '#ff00ff',
        'cyber': '#00ffff',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
