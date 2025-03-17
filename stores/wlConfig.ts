import {defaultThemeColor1, defaultThemeColor2, defaultThemeColor3, defaultWhiteLabelEmail, defaultWLGrey} from '~/utils/constants/common';
import {getColorDarker, getColorLighter} from '~/utils/helpers/color';
import {getPartnerConfig} from '~/utils/services/partner';
import {CommunicationApproachEnum, PartnerPriceModelsEnum, PartnerStatusesEnum, type WlPartnerInfo} from '~/utils/types/partner';

const initState: WlPartnerInfo = {
    id: 0,
    partner_id: 0,
    update_date: null,
    update_by: null,
    domain: '',
    business_name: '',
    logo: '',
    email: '',
    phone: '',
    phone_ext: '',
    address1: '',
    address2: null,
    city: '',
    state: '',
    zip: '',
    price_multiplier: 0,
    price_multiplier_notes: null,
    theme_color1: '',
    theme_color2: '',
    theme_color3: '',
    legal_phone: null,
    legal_email: null,
    sku_prefix: '',
    status_update_date: null,
    status: PartnerStatusesEnum.inactive,
    communication_approach: CommunicationApproachEnum.communicateWithPartner,
    terminal_id: 0,
    cm_business_name: '',
    relationship_manager_id: null,
    cm_contact_name: '',
    cm_phone: '',
    cm_extension: '',
    cm_email: '',
    cm_address1: '',
    cm_address2: '',
    cm_city: '',
    cm_state: '',
    cm_zip: '',
    dns_me_id: null,
    cm_sync: false,
    origin_url: null,
    price_model: PartnerPriceModelsEnum.revenueShare,
    price_discount: 0,
    active_cc_flow: false,
    active_check_or_po_flow: false,
    active_custom_flow: false,
    default_tax_exempt: false,
    no_reply_email: '',
    account_manager_email: '',
    support_email: '',
    inherit_home_carousel_banner: false,
    first_order_coupon: false,
    enable_swag_store: false,
    swag_store_banner: '',
    payments_to_section: false,
    sales_email: '',
    enable_sitewide_profit_multiplier: false,
    commission_minimum: null,
    commission_minimum_notes: '',
    shop_by_occasion_id: null,
    inherit_shop_by_occasion: false,
    enable_shipping_multiplier: false,
    shipping_multiplier: 0,
    enable_proofing_and_artwork: false,
    enable_order_information: false,
    proofing_and_artwork: '',
    order_information: '',
    day_start: '',
    day_end: '',
    time_start: '',
    time_end: '',
    time_zone: '',
    enable_work_time: false,
    enable_quote_given_and_sample_emails: false,
    extra_special_discount: 0,
    favicon: '',
    copy_pg_feature_carousel: false,
    enable_feature_carousel: false,
    enable_wholesale_billing_approach: false,
    base_partner_revenue_share: 0,
    include_shipping_and_handling: false,
    enable_default_shipping_address: false,
    cm_business_type: '',
    enable_orders_artwork: false,
    enable_custom_emails: false,
    excluded_template_id: null,
    acPublicSiteRoot: '',
    ogImage: '',
    ssoConfig: [],
    custom_payment_flows: [],
    default_shipping_address: null,
    logo_images: null,
    isPartner: false,
    theme_color1_fade: '',
    theme_color2_fade: '',
    theme_color3_fade: '',
    theme_color1_tint: '',
    theme_color2_tint: '',
    theme_color3_tint: '',
    theme_color1_tint5: '',
    theme_color2_tint5: '',
    theme_color3_tint5: '',
    showLiveChat: false,
    wlGrey: ''
};

export const useWlConfigStore = defineStore('wl-config', {
    state: () => ({...initState}),
    getters: {
        getWlPartnerInfo: state => state
    },
    actions: {
        async loadtWlPartnerInfo() {
            const response = await getPartnerConfig();
            const data = (response.data.value as WlPartnerInfo | null) || initState;

            const isPartner = Boolean(data.partner_id);
            const theme_color1 = `#${isPartner && data.theme_color1 ? data.theme_color1 : defaultThemeColor1}`;
            const theme_color2 = `#${isPartner && data.theme_color2 ? data.theme_color2 : defaultThemeColor2}`;
            const theme_color3 = `#${isPartner && data.theme_color3 ? data.theme_color3 : defaultThemeColor3}`;
            const theme_color1_fade = getColorDarker(theme_color1, 0.15);
            const theme_color2_fade = getColorDarker(theme_color2, 0.15);
            const theme_color3_fade = getColorDarker(theme_color3, 0.15);
            const theme_color1_tint = getColorLighter(theme_color1, 0.9);
            const theme_color2_tint = getColorLighter(theme_color2, 0.9);
            const theme_color3_tint = getColorLighter(theme_color3, 0.9);
            const theme_color1_tint5 = getColorLighter(theme_color1, 0.95);
            const theme_color2_tint5 = getColorLighter(theme_color2, 0.95);
            const theme_color3_tint5 = getColorLighter(theme_color3, 0.95);
            const email = data.communication_approach === CommunicationApproachEnum.communicateWithPartner ? data.email : defaultWhiteLabelEmail;
            const showLiveChat = isPartner && data.communication_approach === CommunicationApproachEnum.communicateWithClient;
            const wlGrey = isPartner ? defaultWLGrey : '';

            this.$patch({
                ...data,
                theme_color1,
                theme_color2,
                theme_color3,
                theme_color1_fade,
                theme_color2_fade,
                theme_color3_fade,
                theme_color1_tint,
                theme_color2_tint,
                theme_color3_tint,
                theme_color1_tint5,
                theme_color2_tint5,
                theme_color3_tint5,
                email,
                showLiveChat,
                wlGrey,
                isPartner
            });
        }
    }
});
