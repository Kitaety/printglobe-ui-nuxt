<template>
    <StoreHeaderMenuContainer
        :is-partner="wlStore.isPartner"
        :fixed-to-top="fixedToTop"
    >
        <StoreHeaderMenuItem
            :icon="headerMenuIcons.hamburgerMenu"
            :text="sideMenuTitle"
            @click="openHeaderMenu"
        >
            <StoreHamburgerMenu
                ref="hamburger-menu"
                :is-partner="wlStore.isPartner"
                :title="sideMenuTitle"
            />
        </StoreHeaderMenuItem>
        <StoreHeaderMenuItem
            v-slot="{forwardRef}"
            dropdown
            :text="wlStore.isPartner ? 'Shop by Occasion' : 'Shop by Theme'"
        >
            <StoreHeaderMenuTheme :ref="forwardRef" />
        </StoreHeaderMenuItem>
        <StoreHeaderMenuItem
            v-if="enableSwagStore"
            text="Swag Store"
            link="/swag-store"
        />
        <StoreHeaderMenuItem
            v-if="!enableSwagStore"
            text="Quick Ship"
            link="/quick-ship"
        />
        <StoreHeaderMenuItem
            v-slot="{forwardRef}"
            text="Hot Deals"
            :link="wlStore.isPartner ? '/hot-deals' : ''"
            :dropdown="!wlStore.isPartner"
        >
            <StoreHeaderMenuSub v-if="!wlStore.isPartner">
                <StoreHeaderMenuItem
                    :ref="el => forwardRef(el)"
                    text="Hot Deals"
                    link="/hot-deals"
                />
                <StoreHeaderMenuItem
                    text="Coupons"
                    link="/coupons"
                />
            </StoreHeaderMenuSub>
        </StoreHeaderMenuItem>
        <StoreHeaderMenuDivider />
        <StoreHeaderMenuItem
            text="Your Account"
            dropdown
        >
            <StoreHeaderMenuYourAccount />
        </StoreHeaderMenuItem>
        <StoreHeaderMenuItem
            :text="`Cart${cartCount > 0 ? ` (${cartCount})` : ''}`"
            :icon="headerMenuIcons.cart"
            link="/cart"
            :aria-label="`Cart with ${cartCount} items`"
        />
        <StoreHeaderMenuItem
            v-slot="{forwardRef}"
            dropdown
            text="Need Help?"
        >
            <StoreHeaderMenuSub>
                <StoreHeaderMenuItem
                    :ref="el => forwardRef(el)"
                    text="Contact Us"
                    link="/contact"
                />
                <StoreHeaderMenuItem
                    v-if="!wlStore.isPartner || wlStore.showLiveChat"
                    text="Live Chat"
                    @click="e => openChat(e)"
                />
                <StoreHeaderMenuItem
                    v-if="!wlStore.isPartner"
                    text="Credit Application"
                    link="/credit-policy"
                />
                <StoreHeaderMenuItem
                    v-if="!wlStore.isPartner"
                    text="Reseller Application"
                    link="/reseller"
                />
                <StoreHeaderMenuItem
                    text="Upload Artwork"
                    link="/upload-artwork"
                />
                <StoreHeaderMenuItem
                    text="Frequently Asked Questions"
                    link="/faq"
                />
            </StoreHeaderMenuSub>
        </StoreHeaderMenuItem>
    </StoreHeaderMenuContainer>
</template>

<script lang="ts" setup>
import {openChat} from '~/utils/helpers/common';

//TODO implements all function for menus
defineProps({
    fixedToTop: {
        default: false,
        type: Boolean
    }
});

const hamburgerMenu = useTemplateRef('hamburger-menu');

const wlStore = useWlConfigStore();
const enableSwagStore = wlStore.isPartner && wlStore.enable_swag_store;
const headerMenuIcons = {
    hamburgerMenu: 'icon-hamburger',
    cart: 'icon-cart'
};
const sideMenuTitle = wlStore.isPartner ? 'Product Categories' : 'Shop by Category';
//TODO get this from profile store
const cartCount = 0;

const openHeaderMenu = () => {
    hamburgerMenu.value?.openMenu();
};
</script>
