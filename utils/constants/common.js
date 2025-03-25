export const defaultScriptType = 'text/javascript';
export const applicationLdJsonType = 'application/ld+json';
export const stylesheetType = 'stylesheet';
export const preconnectType = 'preconnect';
export const maxFileSizeInBytes = 1048576;
export const hexColorRegex = /[^0-9a-f]/gi;
export const defaultThemeColor1 = 'FCFCFC'; // Nav Bar Color
export const defaultThemeColor2 = '000000'; // Nav Bar Text Color
export const defaultThemeColor3 = '00758B'; // Headline Color
export const defaultWLGrey = '#f6f6f6';

export const dateFormat = 'MM/DD/YYYY';
export const shortDateFormat = 'll';
export const neverLogin = 'NEVER';

export const defaultDomain = 'www.printglobe.com';
export const defaultBusinessName = 'Printglobe';
export const defaultWlBusinessName = 'Swag Solutions';
export const defaultBusinessNameOfficial = 'PrintGlobe';
export const defaultBusinessNameLogo = 'Printglobe the printing super store';
export const defaultLogo = '/images/logo.svg';
export const defaultOGLogo = '/images/ogLogo.jpg';
export const defaultMobileLogo = '/images/mobile-logo.svg';
export const defaultPhoneExt = '302';
export const defaultPhoneExtForCcSubmissionForm = '338';
export const defaultAddress1 = '2512 S. IH 35';
export const defaultAddress2 = 'Suite 100';
export const defaultPaymentsAddress2 = 'Suite 100';
export const defaultCity = 'Austin';
export const defaultState = 'TX';
export const defaultFullState = 'Texas';
export const defaultZip = '78704';
export const defaultZipPayments = '78704';
export const defaultAddressLine1 = `${defaultAddress1}, ${defaultAddress2}`;
export const defaultPaymentsAddressLine1 = `${defaultAddress1}., ${defaultPaymentsAddress2}`;
export const defaultAddressLine2 = `${defaultCity} ${defaultFullState}, ${defaultZip}`;
export const defaultAddressLine2Short = `${defaultCity}, ${defaultState} ${defaultZip}`;
export const defaultPaymentsAddressLine2 = `${defaultCity}, ${defaultFullState} ${defaultZipPayments}`;
export const defaultSupportEmail = 'support@printglobe.com';
export const defaultWhiteLabelSupportEmail = 'support@swagsolutions.com';
export const defaultOrdersEmail = 'web-orders@printglobe.com';
export const defaultPurchaseOrdersEmail = 'purchaseorders@printglobe.com';
export const defaultCompanyStoresEmail = 'companystores@printglobe.com';
export const defaultLeadsEmail = 'leads@printglobe.com';
export const defaultOrderStatusEmail = 'orderstatus@printglobe.com';
export const defaultWhiteLabelEmail = 'sales@swagsolutions.com';
export const defaultPurchaseWhiteLabelEmail = 'purchaseorders@swagsolutions.com';
export const defaultPhoneWithoutCountryCode = '(800) 989-2181';
export const defaultPhone = `1${defaultPhoneWithoutCountryCode}`;
export const defaultWLPhone = '(866) 424-0020';
export const defaultOrderConfirmationPhoneNumber = '(888) 996-3450';
export const pgTitle = 'PrintGlobe – Custom Printed Promotional Items';

export const categoryTiers = {
    supercategory: 'supercategory',
    mastercategory: 'mastercategory',
    category: 'category',
    subcategory: 'subcategory'
};

// These prefixes use to make unique super/master/category/sub-category ID
// that will be used with AnswerBase integration.
export const categoryUniqPrefixes = {
    supercategory: '1',
    mastercategory: '2',
    category: '3',
    subcategory: '4'
};

export const categoryLabels = {
    supercategory: 'Super Category',
    mastercategory: 'Master Category',
    category: 'Category',
    subcategory: 'Sub Category'
};

export const categoryPluralLabels = {
    supercategory: 'Super Categories',
    mastercategory: 'Master Categories',
    category: 'Categories',
    subcategory: 'Sub Categories'
};

export const orderDirections = {
    asc: 'ASC',
    desc: 'DESC'
};

export const employeeRoles = {
    admin: 'admin',
    editor: 'editor',
    vendor: 'vendor',
    sales: 'sales',
    swagStoreAdmin: 'swag_store_admin',
    wlAdmin: 'wl_admin',
    acView: 'ac_view'
};

export const printGlobeMapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDgXcUJ8IKJU7pkfht9FUBqIPmOO58k_DY&';

export const ImageTypes = {
    Primary: 'primary_image',
    Carousel: 'carousel_image'
};

export const CarouselTypes = {
    Product: 'product',
    Category: 'category'
};

export const orderExternalStatuses = {
    pending: 'pending',
    accepted: 'accepted',
    partially_accepted: 'partially_accepted',
    cancelled: 'cancelled'
};

export const orderExternalStatusLabels = {
    pending: 'Pending',
    accepted: 'Accepted',
    partially_accepted: 'Partially accepted',
    cancelled: 'Cancelled'
};

export const orderExternalStatusList = useValues(orderExternalStatuses).map(status => ({
    value: status,
    label: orderExternalStatusLabels[status]
}));

export const protoDelimiter = '//';
export const urlQueryDelimiter = '/';

export const printglobeUrl = 'https://www.printglobe.com';
export const getCustomerReviewsLink = 'https://api.shopperapproved.com/reviews/';
export const customerReviewsFilter = '&rating=4,5&limit=100&test=false&xml=false';
export const creditPolicyLink = 'https://printing.formstack.com/forms/printglobe_credit_application';
export const adaSiteComplianceLink = 'https://adasitecompliancetools.com/ap.asp?h=PRTGLB';

export const httpProtocol = 'http';
export const httpsProtocol = 'https';
export const wwwDomainPrefix = 'www';
export const wwwDomainPrefixRegexp = /^www\./i;
export const mobileDomainPrefixRegexp = /^m\./i;

export const ReorderDirection = {
    Up: 'up',
    Down: 'down'
};

export const usZipCodeRegexp = /^\d{5}(-\d{4})?$/;

// Regexp for checking canadian zip codes.
// it was borrowed from: https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
// and format description here: https://www.canadapost-postescanada.ca/cpc/en/support/articles/addressing-guidelines/postal-codes.page
export const canadaZipCodeRegexp = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

export const wlPartnerPageCMUrl = 'http://hal/CustomerManager/WLPartnerDetails.aspx?id=';
export const categoryUniqPrefixDelimiter = '-';

export const envMode = {
    production: 'production',
    development: 'development'
};

export const percentageSymbol = '%';
export const negativeNumberSymbol = ' -';
export const itemAddedUrlParamName = 'itemAdded';

export const textPlainMime = 'text/plain';
export const textCsvMime = 'text/csv';

export const payjunctionUrl = 'https://www.payjunction.com/';
export const usdCurrency = 'USD';

export const defaultTabNumber = -1;

export const daysOfWeek = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
};

export const passwordTypes = {
    employee: 'employee',
    partnerEmployee: 'partner_employee'
};

export const orderImagesUrlBase = '/order_images/orders/';
