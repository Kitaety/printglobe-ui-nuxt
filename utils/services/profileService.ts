import {getContactInfoRoute, loginRoute, logoutRoute} from '../constants/apiRoutes';
import type {ProfileContactInfo} from '../types/profile';

export const login = (data: {email: string; password: string}) =>
    useFetch(loginRoute, {
        method: 'post',
        body: data
    });

export const getProfileContactInfo = () => useFetch<ProfileContactInfo>(getContactInfoRoute);

export const logOut = () =>
    useFetch(logoutRoute, {
        method: 'post'
    });
