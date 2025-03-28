import {getMasterCategoriesBySuper, getMegaMenuData, getThemeMenuData} from '~/utils/services/menu';
import type {MegaMenu, MenuState, ThemeMenu, ThemeMenuItem, ThemeMenuItemAttribute} from '~/utils/types/menu';
import type {FetchError} from 'ofetch';

const formatMegaMenu = (megaMenu: MegaMenu) => {
    const mastersWithCats = useMap(megaMenu.master_categories_with_cats, m => ({
        title: m.master_category_name,
        path: m.master_category_url
    })).values();

    const mastersWithoutCats = useMap(megaMenu.master_categories_with_cats, m => ({
        title: m.master_category_name,
        path: m.master_category_url
    })).values();

    return [
        {
            links: [...mastersWithCats, ...mastersWithoutCats]
        }
    ];
};
const _convertToLinkObject = (item: ThemeMenuItem | ThemeMenuItemAttribute) => {
    if ('sub_category_url_name' in item) {
        const path = item.sub_category_url_name;
        const title = item.sub_category_name || '';
        return {path, title};
    } else {
        const path = `/search?attr=${item.feature_name.replace(/\s/g, '%20')}`;
        const title = item.feature_name;
        return {path, title};
    }
};

const formatThemeMenu = (themeMenu: ThemeMenu) => {
    return [
        {
            name: themeMenu.events_title,
            links: themeMenu.events.map(_convertToLinkObject)
        },
        {
            name: themeMenu.holidays_title,
            links: themeMenu.holidays.map(_convertToLinkObject)
        },
        {
            name: themeMenu.themes_title,
            links: themeMenu.themes.map(_convertToLinkObject)
        },
        {
            name: themeMenu.attributes_title,
            links: themeMenu.attributes.map(_convertToLinkObject)
        }
    ].filter(item => item.links.length > 0);
};

const initState: MenuState = {
    megaMenu: {
        master_categories_with_cats: [],
        master_categories_without_cats: [],
        super_categories: [],
        masterCats: []
    },
    themeMenu: {
        events: [],
        holidays: [],
        themes: [],
        attributes: [],
        events_title: '',
        holidays_title: '',
        themes_title: '',
        attributes_title: ''
    },
    mobileMenu: {
        business: [],
        promotional: []
    }
};

export const useMenuStore = defineStore('menu', {
    state: () => ({...initState}),
    getters: {
        getMostPopularLinks: state => {
            return formatMegaMenu(state.megaMenu);
        },
        getMobileThemeMenu: state => {
            return formatThemeMenu(state.themeMenu);
        }
    },
    actions: {
        async loadMegaMenu() {
            try {
                const response = await getMegaMenuData();
                if (response.error.value) {
                    throw response.error.value;
                }
                const data = response.data.value;
                const megaMenu = data?.mega_menu;

                this.megaMenu = {
                    ...this.megaMenu,
                    ...megaMenu
                };
            } catch (err: unknown) {
                logError(err as Error | FetchError, 'Get mega menu failed');
                throw err;
            }
        },
        async loadThemeMenu() {
            try {
                const response = await getThemeMenuData();
                if (response.error.value) {
                    throw response.error.value;
                }
                const data = response.data.value;
                const themeMenu = data?.theme_menu;

                this.themeMenu = {
                    ...this.themeMenu,
                    ...themeMenu
                };
            } catch (err: unknown) {
                logError(err as Error | FetchError, 'Get theme menu failed');
                throw err;
            }
        },
        async loadMobileMenu() {
            try {
                const [business, promotional] = await Promise.all([getMasterCategoriesBySuper(1), getMasterCategoriesBySuper(2)]);
                if (business.error.value) {
                    throw business.error.value;
                }
                if (promotional.error.value) {
                    throw promotional.error.value;
                }

                this.mobileMenu = {
                    ...this.mobileMenu,
                    promotional: promotional.data.value?.master_categories || [],
                    business: business.data.value?.master_categories || []
                };
            } catch (err: unknown) {
                logError(err as Error | FetchError, 'Get mobile menu failed');
                throw err;
            }
        }
    }
});
