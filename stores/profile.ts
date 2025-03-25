import {getAccountCart, getProfileContactInfo, logOut} from '~/utils/services/profileService';
import type {CartItem, ProfileContactInfo, ProfileState} from '~/utils/types/profile';
import type {FetchError} from 'ofetch';
import {calculateSubtotal, calculateTotal} from '~/utils/lib/calculate';

const initState: ProfileState = {
    isLogin: false,
    contactInfo: null,
    addresses: [],
    isAdminLogin: false,
    modifyCartItem: null,
    recentItems: [],
    cart: []
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
        async getCart() {
            try {
                if (!this.isLogin) {
                    this.setCart([]);
                    return;
                }
                const {data, error} = await getAccountCart();
                if (error.value) {
                    throw error.value;
                }

                this.setCart(data.value || []);
            } catch (err: unknown) {
                logError(err as Error | FetchError, 'Get cart failed');
            }
        },
        setCart(cartItems: CartItem[]) {
            this.cart = cartItems.map(cartItem => {
                const {quantity, product, addons, imprint_colors, surface_color, is_sample_product} = cartItem;
                const option = product.options.find(o => o.id === cartItem.product_option_id);
                const isAbleToCheckout = Boolean(option);

                return {
                    ...cartItem,
                    isAbleToCheckout,
                    subtotal: isAbleToCheckout
                        ? calculateSubtotal(quantity, option, product, addons, imprint_colors, surface_color, is_sample_product, product.discount)
                        : 0,
                    total: isAbleToCheckout
                        ? calculateTotal(quantity, option, product, addons, imprint_colors, surface_color, is_sample_product, product.discount)
                        : 0
                };
            });
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
