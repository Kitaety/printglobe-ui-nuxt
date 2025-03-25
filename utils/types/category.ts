export enum CategoryType {
    superCategory = 'supercategory',
    masterCategory = 'mastercategory',
    category = 'category',
    subCategory = 'subcategory'
}

export interface SubCategory {
    id: number;
    create_date: Date;
    update_date: Date;
    name: string | null;
    alt_name: string | null;
    url_name: string | null;
    url_name_prev: string | null;
    url_canonical: string | null;
    description: string | null;
    secondary_description: string | null;
    category_id: number | null;
    display_order: number | null;
    active: boolean;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    product_order_strategy: number | null;
    url_redirects: string | null;
    redirect_type: boolean | null;
    redirect_date: Date | null;
    redirect_notes: string | null;
    deleted: boolean;
    long_desc: string | null;
    display_long_desc: boolean;
    display_banner_image: boolean;
    elastic_search_index_date: Date;
    landing_page_name: string | null;
}
