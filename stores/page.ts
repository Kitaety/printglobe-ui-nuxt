import {getDocs} from '~/utils/services/documents';
import {AccountPageTabEnum, type PageDocuments, type PageState} from '../utils/types/page';

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
    schema: null,
    onLoginRoute: '/',
    accountPage: {
        tabNumber: AccountPageTabEnum.profile
    }
};

export const usePageStore = defineStore('page', {
    state: () => ({...initState}),
    getters: {
        getShopByCategory: state => {
            return state.shopByCategory;
        }
    },
    actions: {
        setTitle(title: string) {
            this.title = title;
        },
        setOnLoginRouter(router: string | null | undefined) {
            this.onLoginRoute = router || '/';
        },
        setAccountPageTab(tabNumber: number | null | undefined) {
            if (tabNumber) {
                this.accountPage.tabNumber = tabNumber;
            }
        },
        async loadDocsAction() {
            const response = await getDocs();
            const data = response.data.value as {docs: PageDocuments} | null;
            const docs = ((data?.docs || null) as PageDocuments) || null;

            this.documents = docs;
        }
    }
});
