export type SearchState = {
    aggregations: [];
    products: [];
    total: number;
    params: Record<string, string>;
};

const initState: SearchState = {
    aggregations: [],
    products: [],
    total: 0,
    params: {}
};

//TODO describe types
export const useSearchStore = defineStore('search', {
    state: () => ({...initState}),
    getters: {},
    actions: {
        clearSearch() {
            this.$patch({...initState});
        },
        setSearchResults(products: [], total: number, aggregations: [], params: Record<string, string>) {
            this.$patch({
                products,
                total,
                aggregations,
                params
            });
        }
    }
});
