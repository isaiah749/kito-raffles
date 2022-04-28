module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				testing:
					"url('https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973')",
				'blue-afterlife':
					"url('https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0700.jpg?v=1638823550')",
				'all-forces':
					'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/af1square_93cae282-9fde-4a47-9810-509679ee2f51.jpg?v=1630539237',
				'paul-passions': 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0295.jpg?v=1628176585',
				'weather-bell': 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/cherubBell.png?v=1628192188',
				'bell-mayo': 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/A7_9778.jpg?v=1613550854',
				'green-forces':
					'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Catacomb_AF1_Green_Story.jpg?v=1613550854',
				'creation-forces':
					'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/A7_0978-Edit_1.jpg?v=1637769033'
			},

			backgroundColor: {
				'sky-600': '#0284C7',
				'sky-500': '#0EA5E9',
				'sky-400': '#38BDF8',
				'blur-background': 'hsl(0 0% 100% / 0.1)'
			},
			fontFamily: {
				title: [ 'Bebas Neue' ]
			},
			screens: {
				sm: '440px',
				// => @media (min-width: 440px) { ... }

				md: '547px',
				// => @media (min-width: 547px) { ... }

				lg: '768px',
				// => @media (min-width: 768px) { ... }

				xl: '1024px',
				// => @media (min-width: 1024px) { ... }

				'2xl': '1536px'
				// => @media (min-width: 1536px) { ... }
			},
			gridTemplateRows: {
				'md-mason': 'repeat(3, 120px);'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
