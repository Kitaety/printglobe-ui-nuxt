import {getMegaMenuData} from '~/utils/services/menu';
import type {MenuState} from '~/utils/types/menu';
import type {FetchError} from 'ofetch';

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
        }
    }
});
