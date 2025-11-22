/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#8B4513',
        'brand-yellow': '#F5DEB3',
        'brand-green': '#6B8E23',
      },
    },
  },
  plugins: [],
}
