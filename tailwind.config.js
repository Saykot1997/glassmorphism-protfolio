module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        updown: 'updown 5s linear infinite',
        zoom: 'zoom 3s linear infinite',
      },

      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(+150px)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      }
    },
  },
  plugins: [],
}
