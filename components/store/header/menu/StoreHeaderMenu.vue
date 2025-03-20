<template>
    <StoreHeaderMenuContainer
        :is-partner="isPartner"
        :fixed-to-top="fixedToTop"
    >
        <StoreHeaderMenuItem
            :icon="headerMenuIcons.hamburgerMenu"
            :text="sideMenuTitle"
        >
            <StoreHamburgerMenu
                :is-partner="isPartner"
                :title="sideMenuTitle"
            />
        </StoreHeaderMenuItem>
    </StoreHeaderMenuContainer>
</template>

<script lang="ts" setup>
const {isPartner = false} = defineProps({
    isPartner: {
        default: false,
        type: Boolean
    },
    fixedToTop: {
        default: false,
        type: Boolean
    }
});

const headerMenuIcons = {
    hamburgerMenu: 'icon-hamburger',
    cart: 'icon-cart'
};
const sideMenuTitle = isPartner ? 'Product Categories' : 'Shop by Category';
</script>
