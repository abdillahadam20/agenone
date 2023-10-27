/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				agenone: {
					primary: '#38C682',
					secondary: '#00796D',
					tertiary: 'rgba(56, 198, 130, 0.18)',
					gray: {
						50: '#F3F3F3',
						100: '#CECFD2',
						200: '#B6B8BC',
						300: '#9EA0A5',
						400: '#86888F',
						500: '#6D7079',
						600: '#555962',
						700: '#3D414C',
						800: '#181D2A',
						900: '#0C111F',
					},
				},
			},
			backgroundImage: {
				'primary-50': `linear-gradient(280deg, rgba(0, 121, 109, 0.10) 0%, rgba(56, 198, 130, 0.10) 100%)`,
				'primary-100': `linear-gradient(280deg, rgba(0, 121, 109, 0.20) 0%, rgba(56, 198, 130, 0.20) 100%)`,
				'primary-200': `linear-gradient(280deg, rgba(0, 121, 109, 0.40) 0%, rgba(56, 198, 130, 0.40) 100%)`,
				'primary-300': `linear-gradient(280deg, rgba(0, 121, 109, 0.60) 0%, rgba(56, 198, 130, 0.60) 100%)`,
				'primary-400': `linear-gradient(279deg, rgba(0, 121, 109, 0.80) 0.61%, rgba(56, 198, 130, 0.80) 100%)`,
				'primary-500': `linear-gradient(280deg, #00796D 0%, #38C682 100%)`,
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
