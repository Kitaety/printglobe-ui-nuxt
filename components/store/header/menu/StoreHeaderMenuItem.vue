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
            className="header-menu-item transition-initial"
            href="{defaultLink}"
            :aria-expanded="isOpen"
        >
            <div
                v-if="icon"
                :class="classNames('icon', icon)"
            />
            <span>{{ text }}</span>
        </a>
        {{ _renderChildren() }}
    </li>
    <li
        v-else
        :class="classNames('header-menu-item-wrapper', 'transition-initial', $props.class)"
    >
        <a
            ref="linkElement"
            :aria-label="ariaLabel || undefined"
            className="header-menu-item transition-initial"
            @click="onClick"
            @href="link || defaultLink"
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

const props = defineProps({
    dropdown: {
        default: false,
        type: Boolean
    },
    class: {
        default: '',
        type: String
    },
    ariaLabel: {
        default: '',
        type: String
    },
    icon: {
        default: '',
        type: String
    },
    link: {
        default: '',
        type: String
    },
    text: {
        default: '',
        type: String
    },
    isOpen: {
        default: false,
        type: Boolean
    },
    noFocus: {
        default: false,
        type: Boolean
    }
});
defineEmits<{
    onClick: [];
}>();
const defaultLink = !props.noFocus ? '#' : '';

const onClickDropdownButton = () => {};
const openDropdown = () => {};
const closeDropdown = () => {};
const onBlur = () => {};
const onFocus = () => {};
const _renderChildren = () => {};

const onClick = () => {};
</script>

<style></style>
