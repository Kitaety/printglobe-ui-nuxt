export type ShopByCategory = {
    isOpen: boolean;
    mouseOver: boolean;
    timeoutID: number | null;
};

export type PageDocuments = {
    headerSlogan: string;
    tnc: string;
    pp: string;
    ccpa: string;
};

export enum AccountPageTabEnum {
    profile = 0,
    savedItems = 1,
    ordersAndInvoices = 2
}

export type AccountPage = {
    tabNumber: AccountPageTabEnum;
};

export type PageState = {
    shopByCategory: ShopByCategory;
    documents: PageDocuments;
    title: string;
    description: string;
    isAdmin: boolean;
    prev: string;
    next: string;
    canonical: string;
    host: string;
    skipScripts: boolean;
    removeChat: boolean;
    schema: string | null;
    onLoginRoute: string;
    accountPage: AccountPage;
};
