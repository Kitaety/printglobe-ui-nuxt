<template>
    <div>
        <div>{{ profile.contactInfo?.email }}</div>
        Test TSX Component
        <StoreLoginPanel />
    </div>
</template>

<script lang="ts" setup>
const profile = useProfileStore();
const pageStore = usePageStore();

pageStore.setTitle('test title');
</script>

<style></style>
