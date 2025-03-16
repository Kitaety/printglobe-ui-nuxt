import {getProfileContactInfo} from '~/utils/services/profileService';
import type { ProfileContactInfo, ProfileState } from '~/utils/types/profile';

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
    getters: {
        getIsLogin: state => {
            return state.isLogin;
        },
        getContactInfo: state => state.contactInfo
    },
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

            const response = await getProfileContactInfo();
            this.contactInfo = response.data.value;
        }
    }
});
