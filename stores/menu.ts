import {getMegaMenuData} from '~/utils/services/menu';
import type {MenuState} from '~/utils/types/menu';

const initState: MenuState = {
    megaMenu: {
        master_categories_with_cats: [],
        master_categories_without_cats: [],
        super_categories: [],
        masterCats: []
    }
};

export const useMenuStore = defineStore('menu', {
    state: () => ({...initState}),
    getters: {
        getMegaMenu: state => {
            return state.megaMenu;
        }
    },
    actions: {
        async loadMegaMenu() {
            try {
                const response = await getMegaMenuData();
                const data = response.data.value;
                const megaMenu = data?.mega_menu;

                this.megaMenu = {
                    ...this.megaMenu,
                    ...megaMenu
                };
            } catch (err: unknown) {
                logError(err as Error, 'Get mega menu failed');
                throw err;
            }
        }
    }
});
