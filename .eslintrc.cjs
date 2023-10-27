module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		// ecmaVersion: 'latest',
		// sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
