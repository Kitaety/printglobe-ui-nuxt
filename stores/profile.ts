import {getProfileContactInfo, logOut} from '~/utils/services/profileService';
import type {ProfileContactInfo, ProfileState} from '~/utils/types/profile';
import type {FetchError} from 'ofetch';

const initState: ProfileState = {
    isLogin: false,
    contactInfo: null,
    addresses: [],
    isAdminLogin: false,
    modifyCartItem: null,
    recentItems: []
};

export const useProfileStore = defineStore('profile', {
    state: () => ({...initState}),
    actions: {
        setIsLogin(value: boolean) {
            this.isLogin = value;
        },
        setContactInfo(value: ProfileContactInfo | null) {
            this.contactInfo = value;
        },
        async loadContactInfo() {
            if (!this.isLogin) {
                this.contactInfo = null;
                return;
            }
            const config = useRuntimeConfig().public;

            const response = await getProfileContactInfo();
            this.contactInfo = response.data.value;
            refreshCookie(config.authCookieName);
        },
        async logOut() {
            try {
                const {error} = await logOut();
                if (error.value) {
                    throw error.value;
                }
            } catch (err: unknown) {
                logError(err as Error | FetchError, 'Login failed');
                throw err;
            }
        }
    }
});
