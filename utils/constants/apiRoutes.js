// Common
export const apiBaseRoute = '/api';
export const apiAdminBaseRoute = `${apiBaseRoute}/admin`;
export const baseWlRoute = `${apiAdminBaseRoute}/wl`;
export const objectUpdateRoute = `${apiAdminBaseRoute}/update`;
export const wlObjectUpdateRoute = `${baseWlRoute}/update`;
export const objectDeleteRoute = `${apiAdminBaseRoute}/delete`;
export const objectBulkEditRoute = `${apiAdminBaseRoute}/startBulkEdit`;
export const checkRedirectRoute = `${apiBaseRoute}/checkRedirect`;
export const getClientDocs = `${apiBaseRoute}/docs/get`;
export const getAdminObjectByIdRouter = `${apiAdminBaseRoute}/getbyid`;

// Partner
export const partnersListRoute = `${baseWlRoute}/partners`;
export const getPartnerDataRoute = `${apiBaseRoute}/partners/getPartner`;
export const getPartnerEmployeesDataRoute = `${baseWlRoute}/partner/employees`;
export const getPartnerPrefixSkuRoute = `${baseWlRoute}/partners/getpartnerprefixsku`;
export const sendTestSmtpEmailRouter = `${baseWlRoute}/sendtestemail`;

// Partner Employee
export const partnerEmployeeDeleteRoute = `${baseWlRoute}/partneremployee/delete`;
export const partnerEmployeeChPasswordRoute = `${baseWlRoute}/partneremployee/change/password`;

// Category
export const categoriesRoute = `${apiAdminBaseRoute}/categories`;
export const categoryExcludeRoute = `${apiAdminBaseRoute}/categories/exclude`;
export const categoryChildRoute = `${apiAdminBaseRoute}/getCategoryChild`;

// Account
export const accountBaseRoute = `${apiBaseRoute}/account`;
export const getContactInfoRoute = `${accountBaseRoute}/contactInfo`;
export const getCartRoute = `${accountBaseRoute}/cart`;
export const taxesRoute = `${accountBaseRoute}/taxes`;
export const getRecentItemsRoute = `${accountBaseRoute}/recentItems`;
export const getSavedItemsRoute = `${accountBaseRoute}/savedItems`;
export const getOrdersRoute = `${accountBaseRoute}/orders`;
export const addOrderRoute = `${accountBaseRoute}/addOrder`;
export const changePasswordRoute = `${accountBaseRoute}/changePassword`;
export const reorderRoute = `${accountBaseRoute}/reorder`;
export const resetPasswordRoute = `${apiBaseRoute}/resetpassword`;
export const registerRoute = `${apiBaseRoute}/register`;
export const loginRoute = `${apiBaseRoute}/login`;
export const logoutRoute = `${apiBaseRoute}/logout`;
export const loginAdminRoute = `${apiAdminBaseRoute}/login`;
export const logoutAdminRoute = `${apiAdminBaseRoute}/logout`;
export const saveProductRoute = `${accountBaseRoute}/saveItem`;
export const addCreditCard = `${accountBaseRoute}/addPaymentMethod`;

// Product
export const getAdminProductDataRoute = `${getAdminObjectByIdRouter}/product`;
export const getProductDataRoute = `${apiBaseRoute}/getbyid/product`;
export const getRelatedProductRoute = `${accountBaseRoute}/related/products`;
export const getPriceModelsRoute = `${apiAdminBaseRoute}/price_model`;
export const getSmallPaletteRoute = `${getAdminObjectByIdRouter}/palette-small/`;
export const getProductsRoute = `${apiAdminBaseRoute}/products`;

// Shipping
export const shippingBaseRoute = `${apiBaseRoute}/shipping`;
export const shippingRatesRoute = `${shippingBaseRoute}/rates`;
export const shippingEstimateRoute = `${shippingBaseRoute}/estimate`;

// Employee
export const employeeChPasswordRoute = `${apiAdminBaseRoute}/employee/change/password`;

// Coupon
export const validateCouponRoute = `${apiBaseRoute}/coupon/validate`;
export const saveCouponRoute = `${apiAdminBaseRoute}/coupon`;
export const addCouponImageRoute = `${saveCouponRoute}/add_image`;
export const updateCouponImageRoute = `${saveCouponRoute}/update_image`;
export const deleteCouponImageRoute = `${saveCouponRoute}/delete_image`;

// Contact Us
export const sendContactUsEmail = `${apiBaseRoute}/email/contactus`;
export const sendCompanyStoreRoute = `${apiBaseRoute}/email/companystore`;

// Search
export const sendSearchRoute = `${apiBaseRoute}/search`;
export const sendSearchAutocompleteRoute = `${sendSearchRoute}/autocomplete`;
export const swagStoreSearchRoute = `${sendSearchRoute}/swag-store`;

// Theme menu
export const getThemeMenu = `${apiBaseRoute}/thememenu/get`;
export const getThemeMenuAdmin = `${apiAdminBaseRoute}/thememenu/get`;
export const saveThemeMenuAdmin = `${apiAdminBaseRoute}/thememenu/set`;

// Mega menu
export const getMegaMenu = `${apiBaseRoute}/megamenu/get`;
export const getMegaMenuAdmin = `${apiAdminBaseRoute}/megamenu/get`;
export const saveMegaMenuAdmin = `${apiAdminBaseRoute}/megamenu/set`;

//Reorders
export const getReordersRoute = `${apiAdminBaseRoute}/reorders`;

//Cookie Settings
export const getCookieSettings = `${apiBaseRoute}/cookie/get`;
export const updateCookieSettings = `${apiBaseRoute}/cookie/update`;

//CC Submission form
export const ccSubmissionFormBaseRoute = `${apiBaseRoute}/ccsubmissionform`;
export const addCcInformationRoute = `${ccSubmissionFormBaseRoute}/add`;
export const getCcInformationRoute = `${apiAdminBaseRoute}/ccinformation`;

//Shopper Approved
export const shopperApprovedFeedRoute = `${apiBaseRoute}/saFeed`;

//Templates
export const getDocsRouter = `${apiAdminBaseRoute}/templates/docs/get`;
export const updateDocRouter = `${apiAdminBaseRoute}/templates/doc/update`;

//SSO Configuration
export const baseSsoConfigurationRoute = `${apiAdminBaseRoute}/ssoconfiguration`;
export const ssoConfigurationXmlRoute = `${apiAdminBaseRoute}/ssoconfiguration/xml`;
export const loginSSORoute = `${apiBaseRoute}/sso/login`;
export const loginSSOCallbackRoute = `${loginSSORoute}/callback`;

//Custom Payment Flow
export const baseCustomPaymentFlowRoute = `${apiAdminBaseRoute}/custompaymentflow`;
export const baseCustomPaymentFlowFieldRoute = `${baseCustomPaymentFlowRoute}/field`;

//Dropdowns
export const dropdownBaseRoute = `${apiAdminBaseRoute}/dropdown`;
export const brandDropdownRoute = `${apiAdminBaseRoute}/brand/dropdown`;
export const vendorDropdownRoute = `${dropdownBaseRoute}/vendor`;
export const productDropdownRoute = `${dropdownBaseRoute}/product`;
export const categoryDropdownRoute = `${dropdownBaseRoute}/category`;
export const googleTaxonomyDropdownRoute = `${dropdownBaseRoute}/googletaxonomy`;
export const paletteDropdownRoute = `${dropdownBaseRoute}/vendorPalettes`;
export const fontsDropdownRoute = `${dropdownBaseRoute}/fonts`;
export const shopByOccasionDropdownRoute = `${dropdownBaseRoute}/shopbyoccassion`;
export const featuresDropdownRoute = `${dropdownBaseRoute}/features`;
export const partnersDropdownRoute = `${dropdownBaseRoute}/partners`;
export const colorsDropdownRoute = `${dropdownBaseRoute}/colors`;
export const excludedTemplateDropdownRoute = `${dropdownBaseRoute}/excluded_template`;

//Features
export const getFeaturesRoute = `${apiAdminBaseRoute}/features`;
export const addFeatureRoute = `${apiAdminBaseRoute}/feature`;

//Swag Store
export const baseSwagStoreRoute = `${baseWlRoute}/swagstore`;

//Work Time
export const baseWorkTimeRoute = `${apiAdminBaseRoute}/worktime`;

//Shop By Occasion
export const baseShopByOccasionShopRoute = `${baseWlRoute}/shopbyoccasion`;

//Home Page Banners
const homePageBanner = `${apiAdminBaseRoute}/banner`;
export const commonHomePageBannerImage = `${homePageBanner}/image`;
export const updateInheritBanners = `${commonHomePageBannerImage}/inherit_banner`;

// Social Links
export const socialLinksRoute = `${apiAdminBaseRoute}/social_links`;

//Featured Categories Carousel
export const baseFeaturedCategoriesCarouselRouter = `${apiAdminBaseRoute}/featured_categories`;
export const changeOrderPositionFeaturedCategoryRouter = `${baseFeaturedCategoriesCarouselRouter}/order_position`;
export const changePartnerFeaturedCategoriesCarouselStateRouter = `${baseFeaturedCategoriesCarouselRouter}/state`;

//Images
export const baseImagesRoute = `${apiAdminBaseRoute}/image`;
export const productImagesRoute = `${baseImagesRoute}/product`;
export const productTemplateImageRoute = `${productImagesRoute}/template`;
export const productAltImagesRoute = `${productImagesRoute}/alt`;
export const orderItemImagesRoute = `${baseImagesRoute}/upload/orderitem`;

//Searchable Color
export const deleteSearchableColorRouter = `${apiAdminBaseRoute}/delete/searchableColor`;
export const saveSearchableColorRouter = `${apiAdminBaseRoute}/save/searchableColor`;

//Logo Library
const logoImage = `${apiAdminBaseRoute}/logo`;
export const commonLogoImage = `${logoImage}/image`;
export const orderLogoImage = `${commonLogoImage}/order`;

//Critical Shipping Orders
export const baseCriticalShippingOrdersRouter = `${apiBaseRoute}/criticalshippingorders`;

//WL Custom Emails
export const baseWlCustomEmailsRoute = `${baseWlRoute}/wlcustomemails`;

//Bulk Vendor Import
export const getChangesetRouter = `${apiAdminBaseRoute}/bulk/vendor/test`;
export const confirmChangesetRouter = `${apiAdminBaseRoute}/bulk/vendor/confirm`;
export const getVendorSpreadsheetsRouter = `${apiAdminBaseRoute}/bulk/vendor/spreadsheets`;
export const getVendorTextSpreadsheetRouter = `${apiAdminBaseRoute}/bulk/vendor/spreadsheet/text`;
export const getChangesetVendorTextSpreadsheetRouter = `${apiAdminBaseRoute}/bulk/vendor/test/text`;
export const confirmChangesetVendorTextSpreadsheetRouter = `${apiAdminBaseRoute}/bulk/vendor/confirm/text`;

//Excluded templates
export const baseExcludedTemplatesRoute = `${baseWlRoute}/excluded_templates`;
export const applyExcludedTemplateRoute = `${baseExcludedTemplatesRoute}/apply`;
export const applyPartnerToExcludedTemplateRoute = `${baseExcludedTemplatesRoute}/apply_from_partner`;
export const categoriesExcludedTemplateRoute = `${apiAdminBaseRoute}/categories_excluded_template`;
export const productsExcludedTemplateRoute = `${apiAdminBaseRoute}/products_excluded_template`;
export const templateExcludeRoute = `${apiAdminBaseRoute}/templates/exclude`;
