<template>
    <StoreHeaderMenuSub>
        <StoreHeaderMenuItem
            ref="firstElemet"
            :text="profileStore.isLogin ? 'Sign out' : 'Sign in'"
            @click="onLoginClick"
        />
        <StoreHeaderMenuItem
            v-if="profileStore.isLogin"
            text="Order/Invoices"
            @click="onOrderClick"
        />
        <StoreHeaderMenuItem
            text="Saved Items"
            @click="onSavedItemsClick"
        />
        <StoreHeaderMenuItem
            v-if="profileStore.isLogin"
            text="Account Profile"
            @click="onProfileClick"
        />
    </StoreHeaderMenuSub>
</template>

<script lang="ts" setup>
import {AccountPageTabEnum} from '~/utils/types/page';
//TODO remove {external: true} in navigateTo after migrate account and login pages

const profileStore = useProfileStore();
const pageStore = usePageStore();
const firstElemet = useTemplateRef('firstElemet');

const focus = () => firstElemet.value?.focus();
const onLoginClick = async () => {
    if (profileStore.isLogin) {
        await profileStore.logOut();
        reloadNuxtApp({
            force: true
        });
    } else {
        pageStore.setOnLoginRouter('/');
        navigateTo('/login', {external: true});
    }
};
const onOrderClick = () => {
    if (profileStore.isLogin) {
        pageStore.setAccountPageTab(AccountPageTabEnum.ordersAndInvoices);
        navigateTo('/account', {external: true});
    } else {
        pageStore.setOnLoginRouter('/account');
        pageStore.setAccountPageTab(AccountPageTabEnum.ordersAndInvoices);
        navigateTo('/login', {external: true});
    }
};
const onSavedItemsClick = () => {
    pageStore.setAccountPageTab(AccountPageTabEnum.savedItems);
    navigateTo('/account', {external: true});
};
const onProfileClick = () => {
    if (profileStore.isLogin) {
        pageStore.setAccountPageTab(AccountPageTabEnum.profile);
        navigateTo('/account', {external: true});
    } else {
        pageStore.setOnLoginRouter('/account');
        pageStore.setAccountPageTab(AccountPageTabEnum.profile);
        navigateTo('/login', {external: true});
    }
};

defineExpose({
    focus
});
</script>
