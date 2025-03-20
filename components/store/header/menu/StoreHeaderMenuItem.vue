<template>
    <li
        v-if="dropdown"
        :class="classNames('header-menu-item-wrapper', 'transition-initial', 'dropdown', $props.class, {open: isOpen})"
        @click="onClickDropdownButton"
        @mouseover="openDropdown"
        @mouseleave="closeDropdown"
        @blur="onBlur"
        @focus="onFocus"
    >
        <a
            ref="linkElement"
            :aria-label="ariaLabel || undefined"
            class="header-menu-item transition-initial"
            :href="defaultLink"
            :aria-expanded="isOpen"
        >
            <div
                v-if="icon"
                :class="classNames('icon', icon)"
            />
            <span>{{ text }}</span>
        </a>
        <slot />
        <!-- {{ _renderChildren() }} -->
    </li>
    <li
        v-else
        :class="classNames('header-menu-item-wrapper', 'transition-initial', $props.class)"
    >
        <a
            ref="linkElement"
            :aria-label="ariaLabel || undefined"
            class="header-menu-item transition-initial"
            :href="link || defaultLink"
            @click="onClick"
        >
            <div
                v-if="icon"
                :class="classNames('icon', icon)"
            />
            <span>{{ text }}</span>
        </a>
        <slot />
    </li>
</template>

<script lang="ts" setup>
import classNames from 'classnames';

const props = defineProps<{
    dropdown?: boolean;
    class?: string;
    ariaLabel?: string;
    icon?: string;
    link?: string;
    text?: string;
    isOpen?: boolean;
    noFocus?: boolean;
}>();
defineEmits<{
    onClick: [e: Event];
}>();
const defaultLink = !props.noFocus ? '#' : '';

const onClickDropdownButton = () => {};
const openDropdown = () => {};
const closeDropdown = () => {};
const onBlur = () => {};
const onFocus = () => {};

const _renderChildren = () => {};

const onClick = () => {};
const focus = () => {};

defineExpose({
    focus
});
</script>

<style></style>
