// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css'],
	postcss: {
		plugins: {
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		[
			'@nuxtjs/google-fonts',
			{
				Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				display: 'swap',
				preload: true,
				preconnect: true,
				prefetch: true,
			},
		],
		'nuxt-icon',
		'@vueuse/nuxt',
	],
});
