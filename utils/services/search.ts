import type {LocationQuery} from 'vue-router';
import {sendSearchAutocompleteRoute, sendSearchRoute} from '../constants/apiRoutes';

export const searchAutocomplete = (query: LocationQuery) =>
    useFetch(sendSearchAutocompleteRoute, {
        query,
        headers: {
            domain: useRequestURL().hostname
        }
    });

export const makeSearch = (query: LocationQuery) =>
    useFetch(sendSearchRoute, {
        query,
        headers: {
            domain: useRequestURL().hostname
        }
    });
