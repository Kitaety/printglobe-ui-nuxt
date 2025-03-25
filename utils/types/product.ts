import type {SubCategory} from './category';
import type {Palette} from './color';
import type {Image} from './image';
import type {Vendor} from './vendor';

export enum ProductPriceModelEnum {
    perColor = 'per color',
    perColorPerSide = 'per color per side',
    manual = 'manual'
}

export enum ProductActiveStatusEnum {
    notActive = 'Not Active',
    active = 'Active',
    discontinued = 'Discontinued'
}

export enum ProductSetupTypeEnum {
    oneTime = 'One-Time',
    perSetup = 'Per Setup',
    perColor = 'Per Color',
    perSide = 'Per Side',
    perLocation = 'Per Location',
    specialNotes = 'Special Notes',
    perColorOrperSide = 'Per Color / Per Side'
}

export enum ProductReorderTypeEnum {
    oneTime = 'One-Time',
    perColor = 'Per Color',
    perSetup = 'Per Setup',
    specialNotes = 'Special Notes'
}

export enum ProductStoreTypeEnum {
    redularWebsite = 'regular_website',
    swagStore = 'swag_store'
}

export interface Product {
    id: number;
    create_date: Date;
    update_date: Date;
    name: string;
    url_name: string | null;
    url_name_prev: string | null;
    url_canonical: string | null;
    tracking_script: string | null;
    short_desc: string | null;
    long_desc: string | null;
    blank_discount: number | null;
    size: string | null;
    wrap_size: string | null;
    over_under_run: number | null;
    material: string | null;
    print_method: string | null;
    fine_print: string | null;
    search_boost: number | null;
    special_notes: string | null;
    quantities: number[];
    base_prices: number[];
    multiplier_prices: number[];
    price_model: ProductPriceModelEnum | null;
    setup_fee: number | null;
    reorder_fee: number | null;
    custom_pms_fee: number | null;
    production_time_min: number | null;
    production_time_max: number | null;
    production_time: string | null;
    production_time_units: string | null;
    imprint_width: number | null;
    imprint_height: number | null;
    imprint_diameter: number | null;
    min_order: number | null;
    min_order_units: number | null;
    order_increment: number | null;
    active: ProductActiveStatusEnum;
    active_status_text: string | null;
    sub_category_id: number | null;
    display_order: number | null;
    meta_title: string | null;
    meta_description: string | null;
    public_sku: string | null;
    vendor_item_num: string | null;
    exact_vendor_sku: string | null;
    single_imprint_font_id: number | null;
    price_units: number | null;
    quantity_per_box: number | null;
    weight_per_box: number | null;
    box_size_dimension_1: number | null;
    box_size_dimension_2: number | null;
    box_size_dimension_3: number | null;
    vendor_id: number | null;
    clearance: boolean;
    avail_blank: boolean;
    setup_type: ProductSetupTypeEnum;
    reorder_type: ProductReorderTypeEnum;
    full_bleed: boolean;
    allow_custom_colors: boolean;
    deleted: boolean;
    imprint_palette_id: number | null;
    surface_palette_id: number | null;
    brand_id: number | null;
    brand_name?: string;
    google_taxonomy_id: number | null;
    imprint_area_details: string | null;
    call_for_pricing: boolean;
    click_through_boost: number;
    apply_vendor_hazmat_fee: boolean;
    alternate_image_order: number[];
    elastic_search_index_date: Date;
    multiple_vendor_skus: boolean;
    annual_update_notes: string | null;
    spin_url: string | null;
    handling_fee: number | null;
    shipping_zip: string | null;
    master_item_sku: string | null;
    parent_product_id: number | null;
    store: ProductStoreTypeEnum;
    swag_store_sku: string | null;
    wl_partner_id: number | null;
    product_parent_name: string | null;
    is_swag_store_copy: boolean;
    vendor_name: string | null;
    vendor_zip: string | null;
    taxonomy: string | null;
    discount: number;
    options: ProductOption[];
    subcategories: ProductSubCategory[];
    firstSubCategory?: ProductSubCategory;
    parents: Array<ProductParent[]>;
    desc_image: Image;
    middle: Image;
    primary_image: Image;
    special_image: Image;
    thumbnail: Image;
    alternates: Image[];
    features: ProductFeature[];
    special: ProductSpecial;
    vendor: Vendor;
}

export interface ProductOption {
    id: number;
    product_id: number;
    create_date: Date;
    update_date: Date;
    display_order: number;
    min_qty: number;
    setups: number;
    side_1_colors: number;
    side_2_colors: number;
    side_1_full_color: boolean;
    side_2_full_color: boolean;
    flat_setup_fee: string;
    reorder_fee: string;
    description: string;
    prices: number[];
    imprints: number;
    alternate_imprint_palette_id: number | null;
    allow_custom_colors: boolean;
    deleted: boolean;
    alternate_imprint_palette?: Palette;
}

export interface ProductSubCategory extends SubCategory {
    product_display_order: number;
    primary_image?: Image;
}

export interface ProductParent {
    name: string;
    path: string;
    active: boolean;
}

export interface ProductFeature {
    id: number;
    name: string;
    display_pricing_grid: boolean;
    display_as_banner: boolean;
    pricing_grid_text: string | null;
    banner_rgb: string;
}

export interface ProductSpecial {
    id: number;
    create_date: Date;
    update_date: Date;
    product_id: number;
    start_date: Date;
    end_date: Date;
    deleted: boolean;
    special_options: ProductSpecialOption[];
}

export interface ProductSpecialOption {
    id: number;
    special_id: number;
    product_option_id: number;
    prices: number[];
}
