export enum CommunicationApproachEnum {
    communicateWithPartner = 1,
    communicateWithClient = 2
}

export enum PartnerStatusesEnum {
    new = 'new',
    pending = 'pending',
    active = 'active',
    inactive = 'inactive'
}

export enum PartnerStatusLabelsEnum {
    new = 'New',
    pending = 'Pending Activation',
    active = 'Active',
    inactive = 'Deactivated'
}

export enum PartnerPriceModelsEnum {
    revenueShare = 1,
    discount = 2
}

export type WlPartnerLogoLibratyFolder = {
    [key: string]: WlPartnerLogoLibratyFolder;
} & {
    logos: LogoLibratyLogo[];
};

export type LogoLibratyLogo = {
    id: number;
    url_path: string;
    alt_text: string;
    wl_partner_id: number;
    folder: string;
};

export type SSOConfig = {
    id: number;
    sp_name: string;
    login_btn_title: string;
    password_chng_link: string;
    type: string;
    active: boolean;
    entry_point: string;
    cert: string;
    wl_partner_id: number;
    update_date: Date;
    create_date: Date;
    map_netid: string;
    map_first_name: string;
    map_last_name: string;
    map_email: string;
    partner_id: number;
    partner_url: string;
};

export type CustomPaymentFlowField = {
    id: number;
    custom_payment_flow_id: number;
    name: string;
    type: number;
    required: boolean;
    deleted: boolean;
    update_date: Date;
    create_date: Date;
};

export type CustomPaymentFlow = {
    id: number;
    name: string;
    title: string;
    button_title: string;
    description: string;
    active: boolean;
    deleted: boolean;
    wl_partner_id: number;
    update_date: Date;
    create_date: Date;
    fields: CustomPaymentFlowField[];
};

export type WlPartnerShippingAddress = {
    id: number;
    wl_partner_id: number;
    address1: string;
    address2: string | null | undefined;
    city: string;
    state: string;
    country: string;
    zip: string;
};

export type WlPartnerInfo = {
    id: number;
    partner_id: number;
    update_date: Date | null;
    update_by: string | null;
    domain: string;
    business_name: string;
    logo: string;
    email: string;
    phone: string;
    phone_ext: string;
    address1: string;
    address2: string | null;
    city: string;
    state: string;
    zip: string;
    price_multiplier: number;
    price_multiplier_notes: string | null;
    theme_color1: string;
    theme_color2: string;
    theme_color3: string;
    legal_phone: string | null;
    legal_email: string | null;
    sku_prefix: string;
    status_update_date: Date | null;
    status: PartnerStatusesEnum;
    communication_approach: CommunicationApproachEnum;
    terminal_id: number;
    cm_business_name: string;
    relationship_manager_id: number | null;
    cm_contact_name: string;
    cm_phone: string;
    cm_extension: string;
    cm_email: string;
    cm_address1: string;
    cm_address2: string;
    cm_city: string;
    cm_state: string;
    cm_zip: string;
    dns_me_id: number | null;
    cm_sync: boolean;
    origin_url: string | null;
    price_model: PartnerPriceModelsEnum;
    price_discount: number;
    active_cc_flow: boolean;
    active_check_or_po_flow: boolean;
    active_custom_flow: boolean;
    default_tax_exempt: boolean;
    no_reply_email: string;
    account_manager_email: string;
    support_email: string;
    inherit_home_carousel_banner: boolean;
    first_order_coupon: boolean;
    enable_swag_store: boolean;
    swag_store_banner: string;
    payments_to_section: boolean;
    sales_email: string;
    enable_sitewide_profit_multiplier: boolean;
    commission_minimum: number | null;
    commission_minimum_notes: string;
    shop_by_occasion_id: number | null;
    inherit_shop_by_occasion: boolean;
    enable_shipping_multiplier: boolean;
    shipping_multiplier: number;
    enable_proofing_and_artwork: boolean;
    enable_order_information: boolean;
    proofing_and_artwork: string;
    order_information: string;
    day_start: string;
    day_end: string;
    time_start: string;
    time_end: string;
    time_zone: string;
    enable_work_time: boolean;
    enable_quote_given_and_sample_emails: boolean;
    extra_special_discount: number;
    favicon: string;
    copy_pg_feature_carousel: boolean;
    enable_feature_carousel: boolean;
    enable_wholesale_billing_approach: boolean;
    base_partner_revenue_share: number;
    include_shipping_and_handling: boolean;
    enable_default_shipping_address: boolean;
    cm_business_type: string;
    enable_orders_artwork: boolean;
    enable_custom_emails: boolean;
    excluded_template_id: number | null;
    acPublicSiteRoot: string;
    ogImage: string;
    ssoConfig: SSOConfig[];
    custom_payment_flows: CustomPaymentFlow[];
    default_shipping_address: WlPartnerShippingAddress | null;
    logo_images: WlPartnerLogoLibratyFolder | null;
    isPartner: boolean;
    theme_color1_fade: string;
    theme_color2_fade: string;
    theme_color3_fade: string;
    theme_color1_tint: string;
    theme_color2_tint: string;
    theme_color3_tint: string;
    theme_color1_tint5: string;
    theme_color2_tint5: string;
    theme_color3_tint5: string;
    showLiveChat: boolean;
    wlGrey: string;
};
