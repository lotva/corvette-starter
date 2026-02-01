export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',

	css: ['~~/layers/base/app/core/assets/styles/index.css'],

	devtools: { enabled: true },

	dir: {
		assets: './layers/base/app/core/assets',
	},

	eslint: {
		config: {
			standalone: false,
		},
	},
	experimental: {
		typedPages: true,
	},
	extends: ['./layers/base'],

	imports: {
		scan: false,
	},

	modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/devtools'],

	typescript: {
		tsConfig: {
			include: ['../commitlint.config.ts'],
		},
	},
})
