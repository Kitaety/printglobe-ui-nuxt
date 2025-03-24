<template>
    <StoreHeaderMenuSub>
        <StoreHeaderMenuItem
            :text="profile.isLogin ? 'Sign out' : 'Sign in'"
            @click="onLoginClick"
        />
        <StoreHeaderMenuItem
            v-if="profile.isLogin"
            text="Order/Invoices"
            @click="onOrderClick"
        />
        <StoreHeaderMenuItem
            text="Saved Items"
            @click="onSavedItemsClick"
        />
        <StoreHeaderMenuItem
            v-if="profile.isLogin"
            text="Account Profile"
            @click="onProfileClick"
        />
    </StoreHeaderMenuSub>
</template>

<script lang="ts" setup>
const profile = useProfileStore();

const onLoginClick = () => {};
const onOrderClick = () => {};
const onSavedItemsClick = () => {};
const onProfileClick = () => {};
</script>
