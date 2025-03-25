export enum ImageTypeEnum {
    primary = 'primary',
    middle = 'middle',
    thumbnail = 'thumbnail',
    hires = 'hires',
    alt = 'alt',
    special_notes = 'special_notes',
    logo_small = 'logo_small',
    logo_medium = 'logo_medium',
    logo_large = 'logo_large',
    description = 'description',
    banner_main = 'banner_main',
    banner_left = 'banner_left',
    banner_right = 'banner_right',
    home_carousel_banner = 'home_carousel_banner',
    home_top_banner = 'home_top_banner',
    home_bottom_banner = 'home_bottom_banner',
    carousel = 'carousel'
}

export enum OrderImageTypeEnum {
    artwork = 'artwork',
    logo = 'logo'
}

export interface Image {
    id: number;
    create_date: Date;
    update_date: Date;
    product_id: number | null;
    sub_category_id: number | null;
    category_id: number | null;
    master_category_id: number | null;
    super_category_id: number | null;
    alt_text: string | null;
    url_path: string;
    image_type: ImageTypeEnum;
    brand_id: number | null;
    addon_id: number | null;
    navigate: string | null;
    wl_partner_id: number | null;
    navigate_wl: string | null;
    alt_text_wl: string | null;
    webp_path: string | null;
}

export interface OrderImage {
    id: number;
    create_date: Date;
    update_date: Date;
    url_path: string;
    order_image_type: OrderImageTypeEnum;
    order_item_id: number | null;
    cart_item_id: number | null;
}
