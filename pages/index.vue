<template>
    <div>
        <div>{{ profile.contactInfo?.email }}</div>
        Test TSX Component
        <StoreLoginPanel />
    </div>
</template>

<script lang="ts" setup>
import {useProfileStore} from '~/stores/profile';
const profile = useProfileStore();
</script>

<style></style>
