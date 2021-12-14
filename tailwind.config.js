module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'testing': "url('https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973')",
        'blue-afterlife': "url('https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0700.jpg?v=1638823550')"
      },
      backgroundColor: {
        'sky-600': '#0284C7',
        'sky-500': '#0EA5E9',
        'sky-400': '#38BDF8'
      },
      fontFamily: {
        title: ['Bebas Neue']
      },
      screens: {
        'sm': '440px',
        // => @media (min-width: 440px) { ... }
  
        'md': '547px',
        // => @media (min-width: 547px) { ... }
  
        'lg': '768px',
        // => @media (min-width: 768px) { ... }
  
        'xl': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
