/* eslint-disable no-console */

export const logError = (error: Error, message = '') => {
    console.warn(message || error.message, error);
    // if (!error.response) {
    //     console.warn(message || error.message, error);
    // } else {
    //     console.warn('Network request failed:', {
    //         status: error.response.status,
    //         url: error.config.url,
    //         method: error.config.method,
    //         headers: error.response.headers,
    //         data: error.response.data
    //     });
    // }
};

export const logErrorMessage = (message = '') => console.error(message);
export const logMessage = (message = '') => console.log(message);
