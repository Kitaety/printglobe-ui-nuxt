<template>
    <StoreHeaderMenuContainer
        :is-partner="isPartner"
        :fixed-to-top="fixedToTop"
    >
        <StoreHeaderMenuItem
            :icon="headerMenuIcons.hamburgerMenu"
            :text="isPartner ? 'Product Categories' : 'Shop by Category'"
        >
            Test
        </StoreHeaderMenuItem>
    </StoreHeaderMenuContainer>
</template>

<script lang="ts" setup>
defineProps({
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
</script>
