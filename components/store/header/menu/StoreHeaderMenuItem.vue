<template>
    <li
        v-if="dropdown"
        :class="classNames('header-menu-item-wrapper', 'transition-initial', 'dropdown', $props.class, {open: isOpen})"
        @click="onClickDropdownButton"
        @mouseover="openDropdown"
        @mouseleave="closeDropdown"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
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
        <slot :forward-ref="setForwardRef" />
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
            @click="e => $emit('click', e)"
        >
            <div
                v-if="icon"
                :class="classNames('icon', icon)"
            />
            <span>{{ text }}</span>
        </a>
        <slot :forward-ref="setForwardRef" />
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
    noFocus?: boolean;
}>();
const emit = defineEmits<{
    click: [e: Event];
}>();

const linkElement = useTemplateRef<HTMLLinkElement>('linkElement');
const isOpen = ref(false);

const openDropdown = () => (isOpen.value = true);
const closeDropdown = () => (isOpen.value = false);

const forwardRefComponent = ref();
const setForwardRef = (el: Element | ComponentPublicInstance | null) => {
    forwardRefComponent.value = el;
};

const focusChild = () => {
    if (forwardRefComponent.value && forwardRefComponent.value.focus) {
        forwardRefComponent.value.focus();
    }
};

const focus = () => {
    nextTick(() => {
        if (linkElement.value?.focus) {
            linkElement.value?.focus();
        }
    });
};

const defaultLink = !props.noFocus ? '#' : '';

const onClickDropdownButton = (e: Event) => {
    emit('click', e);

    isOpen.value = !isOpen.value;
    focusChild();
};

const onFocusOut = (e: FocusEvent) => {
    if (e.currentTarget === e.target || !(e.currentTarget as Node).contains(e.relatedTarget as Node)) {
        closeDropdown();
    }
};
const onFocusIn = (e: FocusEvent) => {
    if (e.target === linkElement.value && isOpen.value) {
        closeDropdown();
    }
};

defineExpose({
    focus
});
</script>

<style></style>
