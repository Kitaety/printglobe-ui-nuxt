<script setup lang="ts">
import classNames from 'classnames';

defineProps<{
    class?: string;
    border?: boolean;
}>();
defineSlots<{
    default(props: {setRef: (el: Element | ComponentPublicInstance | null) => void}): Element;
}>();

const childRef = ref();
const setSlotRef = (el: Element | ComponentPublicInstance | null) => {
    childRef.value = el;
};

const focus = () => {
    nextTick(() => {
        if (childRef.value && childRef.value.focus) {
            childRef.value.focus();
        }
    });
};

defineExpose({
    focus
});
</script>

<template>
    <ul :class="classNames('header-sub-menu', $props.class, {border})">
        <slot :set-ref="setSlotRef" />
    </ul>
</template>

<script lang="ts" setup></script>

<style></style>
