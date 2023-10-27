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
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
