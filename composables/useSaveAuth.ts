import {isServer} from '~/utils/helpers/common';

export const useSaveAuth = () => {
    const config = useRuntimeConfig().public;

    const authState = useState<{
        isLogin: boolean;
        isAdminLogin: boolean;
    }>('authSaveState', () => ({
        isAdminLogin: false,
        isLogin: false
    }));

    if (isServer) {
        const authCookie = useCookie(config.authCookieName);
        const authAdminCookie = useCookie(config.authAdminCookieName);
        authState.value.isLogin = !!authCookie.value;
        authState.value.isAdminLogin = !!authAdminCookie.value;
    } else {
        // На клиенте используем значение из состояния
        const cookie = useCookie(config.authCookieName);
        const authAdminCookie = useCookie(config.authAdminCookieName);
        authState.value.isLogin = !!cookie.value;
        authState.value.isAdminLogin = !!authAdminCookie.value;
    }
    return authState;
};
