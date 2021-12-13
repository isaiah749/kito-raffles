module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'testing': "url('https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973')"
      },
      backgroundColor: {
        'sky-600': '#0284C7',
        'sky-500': '#0EA5E9',
        'sky-400': '#38BDF8'
      },
      fontFamily: {
        title: ['Bebas Neue']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
