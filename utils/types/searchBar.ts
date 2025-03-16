export type SearchBarAutoCompliteItem = {
    id?: number;
    url_name: string;
    image: string;
    name: string;
};

export type SearchBarAutoComplete = {
    products: Array<SearchBarAutoCompliteItem>;
    sub_categories: Array<SearchBarAutoCompliteItem>;
};
