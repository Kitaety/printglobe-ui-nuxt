// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
	modules: [
		'@pinia/nuxt'
	],
    vite: {
        server: {
            allowedHosts: ['printglobe.local', '.printglobe.local', 'printglobe.com', '.printglobe.com', 'swagsolutions.com', '.swagsolutions.com'],
        }
    },
    devServer: {
        port: Number(process.env.PG_PORT)
    },
    pinia: {
        storesDirs: ['./stores/**']
    },
});
