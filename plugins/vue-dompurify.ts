import VueDOMPurifyHTML from 'vue-dompurify-html';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueDOMPurifyHTML, {
		default: {
			ALLOWED_ATTR: [
				'href',
				'target',
				'class',
				'style',
				'data-id',
				'id',
				'type',
			],
		},
		namedConfigurations: {
			svg: {
				USE_PROFILES: { svg: true },
			},
			mathml: {
				USE_PROFILES: { mathMl: true },
			},
		},
	});
});
