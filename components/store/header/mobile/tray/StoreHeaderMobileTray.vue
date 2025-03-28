<template>
    <div
        id="mobile-tray"
        :class="classNames('mobile-header-tray', {'tray-open': isOpen, closed: !isOpen})"
    >
        <div class="mobile-header-tray-section">
            <a
                class="mobile-header-tray-close"
                @click="closeTray"
            />
        </div>
        <div class="mobile-header-tray-contents">
            <div class="mobile-header-tray-section">
                <a
                    class="mobile-header-tray-section-title"
                    :style="{cursor: 'pointer'}"
                    @click="() => clickPhoneNumber()"
                >
                    Call
                    <StorePhoneWithExtension
                        :phone="wlCongifStore.isPartner ? wlCongifStore.phone : defaultPhone"
                        :phone-ext="wlCongifStore.isPartner ? wlCongifStore.phone_ext : undefined"
                        :class="classNames({'site-phone': !wlCongifStore.isPartner})"
                    />
                </a>
            </div>
            <div class="mobile-header-tray-section">
                <StoreHeaderMobileTrayExpandableSection
                    v-if="hasMostPopularLinks"
                    title="Most Popular"
                    :links="mostPopularLinks"
                    @close-tray="closeTray"
                />
                <StoreHeaderMobileTrayExpandableSection
                    v-if="hasPromotionalProducts"
                    title="Promotional Products"
                    :links="[
                        {
                            links: menuStore.mobileMenu.promotional.map(l => ({
                                path: l.url,
                                title: l.name
                            }))
                        }
                    ]"
                    @close-tray="closeTray"
                />
                <StoreHeaderMobileTrayExpandableSection
                    v-if="hasBusinessProducts"
                    title="Business Printing"
                    :links="[{links: menuStore.mobileMenu.business.map(l => ({path: l.url, title: l.name}))}]"
                    @close-tray="closeTray"
                />
                <StoreHeaderMobileTrayExpandableSection
                    :title="wlCongifStore.isPartner ? 'Shop by Occasion' : 'Shop by Theme'"
                    :links="menuStore.getMobileThemeMenu"
                    @close-tray="closeTray"
                />
                <div
                    v-if="wlCongifStore.isPartner && wlCongifStore.enable_swag_store"
                    class="mobile-header-tray-section-title"
                >
                    <NuxtLink
                        to="/swag-store"
                        @click="closeTray"
                    >
                        Swag Store
                    </NuxtLink>
                </div>
                <div
                    v-if="wlCongifStore.enable_swag_store"
                    class="mobile-header-tray-section-title"
                >
                    <NuxtLink
                        to="/quick-ship"
                        @click="closeTray"
                    >
                        Quick Turn Products
                    </NuxtLink>
                </div>
                <div class="mobile-header-tray-section-title">
                    <NuxtLink
                        to="/hot-deals"
                        @click="closeTray"
                    >
                        Hot Deals
                    </NuxtLink>
                </div>
            </div>
            <div class="mobile-header-tray-section">
                <div class="mobile-header-tray-section-utility-title">Need Help?</div>
                <div class="mobile-header-tray-section-utility-list">
                    <h2 class="mobile-header-tray-section-link-text">
                        <NuxtLink
                            to="/contact"
                            @click="closeTray"
                        >
                            Contact
                        </NuxtLink>
                    </h2>
                    <h2
                        v-if="wlCongifStore.isPartner && wlCongifStore.showLiveChat"
                        class="mobile-header-tray-section-link-text"
                    >
                        <a @click="onOpenChat">Live Chat</a>
                    </h2>
                    <h2 class="mobile-header-tray-section-link-text">
                        <NuxtLink
                            to="/credit-policy"
                            @click="closeTray"
                        >
                            Credit Application
                        </NuxtLink>
                    </h2>
                    <h2
                        v-if="!wlCongifStore.isPartner"
                        class="mobile-header-tray-section-link-text"
                    >
                        <NuxtLink
                            to="/reseller"
                            @click="closeTray"
                        >
                            Reseller Program
                        </NuxtLink>
                    </h2>
                    <h2 class="mobile-header-tray-section-link-text">
                        <NuxtLink
                            to="/upload-artwork"
                            @click="closeTray"
                        >
                            Upload Art
                        </NuxtLink>
                    </h2>
                    <h2 class="mobile-header-tray-section-link-text">
                        <NuxtLink
                            to="/faq"
                            @click="closeTray"
                        >
                            FAQ
                        </NuxtLink>
                    </h2>
                </div>
            </div>
            <div class="mobile-header-tray-section">
                <div class="mobile-header-tray-section-utility-title">Your Account</div>
                <div class="mobile-header-tray-section-utility-list">
                    <h2 class="mobile-header-tray-section-link-text">
                        <NuxtLink
                            to="/login"
                            @click="onLogInClick"
                        >
                            {{ profileStore.isLogin ? 'Sign out' : 'Sign in' }}
                        </NuxtLink>
                    </h2>
                    <h2 class="mobile-header-tray-section-link-text">
                        <a @click="() => onAccountInformationClick(AccountPageTabEnum.ordersAndInvoices)">Orders/Invoices</a>
                    </h2>
                    <h2 class="mobile-header-tray-section-link-text">
                        <a @click="() => onAccountInformationClick(AccountPageTabEnum.savedItems)">Saved Items</a>
                    </h2>
                    <h2 class="mobile-header-tray-section-link-text">
                        <a @click="() => onAccountInformationClick(AccountPageTabEnum.profile)">Profile</a>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames';
import {defaultPhone} from '~/utils/constants/common';
import {clickPhoneNumber, openChat} from '~/utils/helpers/common';
import {AccountPageTabEnum} from '~/utils/types/page';
import StoreHeaderMobileTrayExpandableSection from './StoreHeaderMobileTrayExpandableSection.vue';

const wlCongifStore = useWlConfigStore();
const profileStore = useProfileStore();
const pageStore = usePageStore();
const menuStore = useMenuStore();

defineProps<{
    isOpen: boolean;
}>();

const emits = defineEmits<{
    closeTray: [];
}>();

const closeTray = () => {
    emits('closeTray');
};

const onOpenChat = (e: Event) => {
    closeTray();
    openChat(e);
};

const onLogInClick = async () => {
    if (profileStore.isLogin) {
        try {
            await profileStore.logOut();
            reloadNuxtApp({
                force: true
            });
        } catch {
            closeTray();
        }
    } else {
        pageStore.setOnLoginRouter('/');
        navigateTo('/login', {external: true});
    }
    closeTray();
};

const onAccountInformationClick = (tab: AccountPageTabEnum) => {
    pageStore.setAccountPageTab(tab);
    const route = profileStore.isLogin === true ? '/account' : 'login';
    if (!profileStore.isLogin) {
        pageStore.setOnLoginRouter('/account');
    }
    navigateTo(route, {external: true});
    closeTray();
};

const mostPopularLinks = menuStore.getMostPopularLinks;
const hasMostPopularLinks = mostPopularLinks && mostPopularLinks.length !== 0 && mostPopularLinks.some(link => link.links && link.links.length !== 0);

const hasPromotionalProducts = menuStore.mobileMenu.promotional && menuStore.mobileMenu.promotional.length > 0;
const hasBusinessProducts = menuStore.mobileMenu.business && menuStore.mobileMenu.business.length > 0;
</script>

<style></style>
