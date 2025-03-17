import {getContactInfoRoute, loginRoute} from '../constants/apiRoutes';

export const login = (data: {email: string; password: string}) =>
    useFetch(loginRoute, {
        method: 'post',
        body: data
    });

export const getProfileContactInfo = () => useFetch<ProfileContactInfo>(getContactInfoRoute);
