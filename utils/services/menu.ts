import {getMasterCategoriesBySuperRoute, getMegaMenu, getMegaMenuAdmin, getThemeMenu, getThemeMenuAdmin} from '../constants/apiRoutes';
import type {MegaMenu, MobileMenuItem} from '../types/menu';

export interface MobileMenuResponse {
    master_categories: MobileMenuItem[];
}

export const getThemeMenuData = (isAdmin?: boolean) => useFetch(isAdmin ? getThemeMenuAdmin : getThemeMenu);

export const getMegaMenuData = (isAdmin?: boolean) => useFetch<{mega_menu: MegaMenu}>(isAdmin ? getMegaMenuAdmin : getMegaMenu);

export const getMasterCategoriesBySuper = (id: number) => useFetch<MobileMenuResponse>(`${getMasterCategoriesBySuperRoute}/${id}`);
