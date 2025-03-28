export type MenuState = {
    megaMenu: MegaMenu;
    themeMenu: ThemeMenu;
    mobileMenu: MobileMenu;
};
export type MegaMenu = {
    master_categories_with_cats: MegaMenuMasterCategory[];
    master_categories_without_cats: MegaMenuMasterCategory[];
    super_categories: MegaMenuMegaSuperCategory[];
    masterCats: SideMenuItem[];
};

export type MegaMenuMegaSuperCategory = {
    super_category_id: number;
    super_category_name: string;
    super_category_url: string;
    master_categories: MegaMenuMasterCategory[];
};

export type MegaMenuMasterCategory = {
    master_category_id: number;
    master_category_name: string;
    master_category_url: string;
    display_order: number;
    display_categories?: boolean;
    categories?: MegaMenuMegaCategory[];
};

export type MegaMenuMegaCategory = {
    category_id: number;
    category_name: string;
    category_url: string;
    display_order: number;
};

export interface SideMenuItem {
    id: number;
    name: string;
    url_name: string;
    display_in_main_menu?: number;
    master_category_id?: number;
    category_id?: number;
    children?: SideMenuItem[];
}

export type ThemeMenu = {
    events: ThemeMenuItem[];
    holidays: ThemeMenuItem[];
    themes: ThemeMenuItem[];
    attributes: ThemeMenuItemAttribute[];
    events_title: string;
    holidays_title: string;
    themes_title: string;
    attributes_title: string;
};

export type ThemeMenuItem = {
    sub_category_id: number;
    sub_category_name: string;
    sub_category_url_name: string;
    theme_type: string;
    display_order: number;
};

export type ThemeMenuItemAttribute = {
    feature_id: number;
    feature_name: string;
    display_order: number;
};

export type MobileMenu = {
    business: MobileMenuItem[];
    promotional: MobileMenuItem[];
};

export type MobileMenuItem = {
    url: string;
    name: string;
};
