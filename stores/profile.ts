import {getProfileContactInfo} from '~/utils/services/profileService';

const initState: ProfileState = {
    isLogin: false,
    contactInfo: null
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
