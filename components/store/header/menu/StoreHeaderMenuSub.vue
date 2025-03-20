<script setup lang="ts">
import classNames from 'classnames';
import type StoreHeaderMenuItem from './StoreHeaderMenuItem.vue';
type StoreHeaderMenuItemType = InstanceType<typeof StoreHeaderMenuItem>;

defineProps<{
    class?: string;
    border?: boolean;
}>();
const firstElment = ref<StoreHeaderMenuItemType>();
const slots = defineSlots<{
    default(): StoreHeaderMenuItemType[];
}>();

onMounted(() => {
    if (slots.default().length) {
        firstElment.value = slots.default()[0];
    }
});

const focus = () => {
    if (firstElment.value) {
        firstElment.value.focus();
    }
};
defineExpose({
    focus
});
</script>

<template>
    <ul :class="classNames('header-sub-menu', $props.class, {border})">
        <slot />
    </ul>
</template>

<script lang="ts" setup></script>

<style></style>
