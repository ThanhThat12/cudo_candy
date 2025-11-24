/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#6B4423',
        'brand-amber': '#D4A574',
        'brand-caramel': '#C19A6B',
        'brand-honey': '#E5B567',
        'brand-dark': '#4A3121',
        'brand-light': '#F5E6D3',
      },
      backgroundImage: {
        'candy-gradient': 'linear-gradient(135deg, #6B4423 0%, #C19A6B 50%, #E5B567 100%)',
        'candy-gradient-reverse': 'linear-gradient(135deg, #E5B567 0%, #C19A6B 50%, #6B4423 100%)',
        'candy-radial': 'radial-gradient(circle, #E5B567 0%, #C19A6B 50%, #6B4423 100%)',
      },
    },
  },
  plugins: [],
}
