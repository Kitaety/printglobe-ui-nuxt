export type MenuState = {
    megaMenu: MegaMenu;
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
