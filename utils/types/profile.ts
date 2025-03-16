export enum ProfileAddressTypesEnum {
    shipping = 'shipping'
}

export type ProfileAddress = {
    account_id: number;
    address_type: ProfileAddressTypesEnum;
    city: string;
    company_name: string;
    country: string;
    deleted: boolean;
    id: number;
    is_default: boolean;
    line1: string;
    line2: string;
    name: string;
    province: string;
    state: string;
    zip: string;
};

export type ProfileContactInfo = {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    isNewsletterSubscriber: boolean;
    net_id: number | null;
};

export type CartItem = {
    id: number;
    account_id: number;
    cookie: string | null;
    product_id: number;
    in_hands_date: Date | null;
    imprint_comment: string;
    quantity: number;
    item_text: string;
    surface_color_id: number;
    product_option_id: number;
    delivery_instructions: string;
    design_help: boolean;
    special_instructions: string | null;
    additional_instructions: string;
    zip: string;
    estimated_shipping: number;
    sales_tax: number | null;
    create_date: Date;
    update_date: Date;
    is_sample_product: boolean;
    isAbleToCheckout: boolean;
    subtotal: number;
    total: number;
};

export type RecentItem = {
    id: number;
    url_name: string;
    name: string;
    lowest_price: number;
    product_price: number;
    public_sku: string;
    primary_image: string;
    thumbnail: string;
};

export type ProfileState = {
    addresses: ProfileAddress[];
    isLogin: boolean;
    isAdminLogin: boolean;
    contactInfo: ProfileContactInfo | null;
    modifyCartItem: CartItem | null;
    recentItems: RecentItem[];
};
