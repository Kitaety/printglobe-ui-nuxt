const parseAsBoolean = param => param === 'true';

export const enableMetrics = parseAsBoolean(process.env.PG_ENABLE_METRICS);
export const redirectSSL = parseAsBoolean(process.env.PG_REDIRECT_SSL);
export const forwardApiRequests = parseAsBoolean(process.env.PG_FORWARD_API_REQUESTS);

export const apiRoot = process.env.PG_API_ROOT;
export const rootUri = process.env.PG_ROOT_URI;
export const publicServerRoot = process.env.PG_PUBLIC_SERVER_ROOT;

export const authCookieName = process.env.PG_AUTH_COOKIE_NAME;
export const adminAuthCookieName = process.env.PG_ADMIN_AUTH_COOKIE_NAME;
export const guestCookieName = process.env.PG_GUEST_COOKIE_NAME;

export const imagesPath = process.env.PG_IMAGE_PATH;
export const disableGA = parseAsBoolean(process.env.PG_DISABLE_GA);
export const port = Number(process.env.PG_PORT);
export const host = process.env.PG_HOST;

export const preventCrawlers = parseAsBoolean(process.env.PG_PREVENT_CRAWLERS);

export const redis = {
    host: process.env.PG_REDIS_HOST,
    port: Number(process.env.PG_REDIS_PORT)
};

export const sandboxPath = process.env.PG_SANDBOX_PATH;

export const buildVersion = process.env.PG_BUILD_VERSION;

export const saSite = process.env.PG_SA_SITE;
export const saToken = process.env.PG_SA_TOKEN;

export const gaMeasurementId = process.env.PG_GA_MEASUREMENT_ID;
export const gaOptimizeContainerId = process.env.PG_GA_OPTIMIZE_CONTAINER_ID;

export const apiSaToken = process.env.PG_API_SA_TOKEN;
export const ga4MeasurementId = process.env.PG_GA4_MEASUREMENT_ID;
export const cookieSettingsCookieName = process.env.PG_COOKIE_SETTINGS_COOKIE_NAME;
export const enableCookieSettings = parseAsBoolean(process.env.ENABLE_COOKIE_SETTINGS);

export const klaviyoPublicKey = process.env.PG_KLAVIYO_PUBLIC_KEY;
export const wlKlaviyoPublicKey = process.env.WL_KLAVIYO_PUBLIC_KEY;
export const useKlaviyo = parseAsBoolean(process.env.PG_USE_KLAVIYO);

export const pgGoogleTagManagerId = process.env.PG_GOOGLE_TAG_MANAGER_ID;
export const wlGoogleTagManagerId = process.env.WL_GOOGLE_TAG_MANAGER_ID;

export const wlGa4MeasurementId = process.env.WL_GA4_MEASUREMENT_ID;
export const wlGaMeasurementId = process.env.WL_GA_MEASUREMENT_ID;
export const pgfbpixelid = process.env.PG_FB_PIXEL_ID;

export const wlLiveChatId = process.env.WL_LIVE_CHAT_ID;
export const pgPjPubKey = process.env.PG_PAYJUNCTION_PUB_KEY;
export const pgPjPubUrl = process.env.PG_PAYJUNCTION_URL;
export const pgAudioeyeSiteHash = process.env.PG_AUDIOEYE_SITE_HASH;
