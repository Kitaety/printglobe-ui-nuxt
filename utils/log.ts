/* eslint-disable no-console */
import type {FetchError} from 'ofetch';

export const logError = (error: Error | FetchError, message = '') => {
    const fetchError = error as FetchError;
    console.warn(message || error.message, error);
    if (fetchError.response) {
        console.warn('Network request failed:', {
            status: fetchError.status,
            url: fetchError.response.url,
            headers: fetchError.response.headers,
            data: fetchError.response._data
        });
    } else {
        console.warn(message || error.message, error);
    }
};

export const logErrorMessage = (message = '') => console.error(message);
export const logMessage = (message = '') => console.log(message);
