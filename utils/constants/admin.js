import {partnerPriceModels} from './partner';

export const notNumbersRegexp = /\D/g;
export const phoneParserRegexp = /(\d{1,3})?(\d{1,3})?(\d{1,4})?/;
export const notLettersRegexp = /[^a-z]/gi;
export const pantoneToolLink = 'https://www.pantone.com/color-finder';
export const defaultAdminPageSize = 50;
export const defaultAdminPageSizeForWLPageTab = 5;

export const partnerTabs = {
    general: 0,
    website: 1,
    categories: 2,
    homeBanners: 3,
    shopByOccasion: 4,
    pricing: 5,
    employees: 6,
    ssoConfiguration: 7,
    paymentFlow: 8,
    swagStore: 9,
    customEmails: 10,
    logoLibrary: 11,
    noTab: -1
};

export const partnerPriceOptions = [
    {value: partnerPriceModels.revenueShare, label: 'Revenue Share'},
    {value: partnerPriceModels.discount, label: 'Discount'}
];
export const orderDirectionArrowImgs = {
    down: '/images/downarrow-white.svg',
    up: '/images/uparrow-white.svg'
};
export const partnerTaxExemptOptions = [
    {value: 0, label: 'Not Tax Exempt'},
    {value: 1, label: 'Tax Exempt'}
];
