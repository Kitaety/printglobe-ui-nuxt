import {getDocs} from '~/utils/services/documents';
import type {PageDocuments, PageState} from '../utils/types/page';

const initState: PageState = {
    shopByCategory: {
        isOpen: false,
        mouseOver: false,
        timeoutID: null
    },
    documents: {
        headerSlogan: '',
        tnc: '',
        pp: '',
        ccpa: ''
    },
    title: '',
    description: '',
    isAdmin: false,
    prev: '',
    next: '',
    canonical: '',
    host: '',
    skipScripts: false,
    removeChat: false,
    schema: null
};

export const usePageStore = defineStore('page', {
    state: () => ({...initState}),
    getters: {
        getShopByCategory: state => {
            return state.shopByCategory;
        }
    },
    actions: {
        async loadDocsAction() {
            const response = await getDocs();
            const data = response.data.value as {docs: PageDocuments} | null;
            const docs = ((data?.docs || null) as PageDocuments) || null;

            this.documents = docs;
        }
    }
});
