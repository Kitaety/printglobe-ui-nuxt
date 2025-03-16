// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-03-16',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'nuxt-lodash'],
    vite: {
        server: {
            allowedHosts: ['printglobe.local', '.printglobe.local', 'printglobe.com', '.printglobe.com', 'swagsolutions.com', '.swagsolutions.com']
        }
    },
    devServer: {
        port: Number(process.env.PG_PORT)
    },
    pinia: {
        storesDirs: ['./stores/**']
    },
    nitro: {
        compressPublicAssets: {
            gzip: true,
            brotli: true
        }
    },
    runtimeConfig: {
        app: {
            apiRoot: process.env.NUXT_API_ROOT
        },
        public: {
            preventCrawlers: process.env.NUXT_PUBLIC_PREVENT_CRAWLERS,
            buildVersion: process.env.NUXT_PUBLIC_BUILD_VERSION,
            klaviyoPublicKey: process.env.NUXT_PUBLIC_KLAVIYO_PUBLIC_KEY,
            useKlaviyo: process.env.NUXT_PUBLIC_USE_KLAVIYO,
            googleTagManagerId: process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
            ga4MeasurementId: process.env.NUXT_PUBLIC_GA4_MEASUREMENT_ID,
            gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID,
            enableCookieSettings: process.env.NUXT_PUBLIC_ENABLE_COOKIE_SETTINGS,
            wlKlaviyoPublicKey: process.env.NUXT_PUBLIC_WL_KLAVIYO_PUBLIC_KEY,
            wlGa4MeasurementId: process.env.NUXT_PUBLIC_WL_GA4_MEASUREMENT_ID,
            wlGoogleTagManagerId: process.env.NUXT_PUBLIC_WL_GOOGLE_TAG_MANAGER_ID,
            wlGaMeasurementId: process.env.NUXT_PUBLIC_WL_GA_MEASUREMENT_ID,
            fbPixelId: process.env.NUXT_PUBLIC_FB_PIXEL_ID,
            disableGA: process.env.NUXT_PUBLIC_DISABLE_GA,
            pjPubUrl: process.env.NUXT_PUBLIC_PAYJUNCTION_URL,
            pjPubKey: process.env.NUXT_PUBLIC_PAYJUNCTION_PUB_KEY,
            wlLiveChatId: process.env.NUXT_PUBLIC_WL_LIVE_CHAT_ID,
            authCookieName: process.env.NUXT_PUBLIC_AUTH_COOKIE_NAME
            // wlGaMeasurementId: process.env.,
            // wlGaMeasurementId: process.env.,
            // wlGaMeasurementId: process.env.,
            // wlGaMeasurementId: process.env.,
            // wlGaMeasurementId: process.env.,
            // wlGaMeasurementId: process.env.,
            // wlGaMeasurementId: process.env.,
        }
    }
});
