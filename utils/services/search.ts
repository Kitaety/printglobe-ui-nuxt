import { sendSearchAutocompleteRoute, sendSearchRoute } from "../constants/apiRoutes";
import type { BaseResponse } from "./responses";

export const searchAutocomplete = (query: Record<string, any>) => useFetch(sendSearchAutocompleteRoute, {
	query, 
	headers: {
		domain: useRequestURL().hostname
	}
});

export const makeSearch = (query: Record<string, any>) => useFetch<BaseResponse>(sendSearchRoute, {
	query, 
	headers: {
		domain: useRequestURL().hostname
	}
});
