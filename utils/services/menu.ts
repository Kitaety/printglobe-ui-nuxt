import {getMegaMenu, getMegaMenuAdmin, getThemeMenu, getThemeMenuAdmin} from '../constants/apiRoutes';
import type {MegaMenu} from '../types/menu';

export const getThemeMenuData = (isAdmin?: boolean) => useFetch(isAdmin ? getThemeMenuAdmin : getThemeMenu);

export const getMegaMenuData = (isAdmin?: boolean) => useFetch<{mega_menu: MegaMenu}>(isAdmin ? getMegaMenuAdmin : getMegaMenu);
