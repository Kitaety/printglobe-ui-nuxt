<template>
    <li :class="classNames('menu-item-wrapper', $props.class, {open})">
        <a
            :href="isLink ? `/${item.url_name}` : '#'"
            :class="classNames('menu-item', 'transition-initial', {'back-item': isBack, bold: isBold, 'link-item': isLink})"
            :aria-label="text"
            @click="_onClick"
        >
            <span
                v-if="isBack && !isLink"
                class="item-back-arrow"
            />
            <span class="item-text">{{ text }}</span>
            <span
                v-if="!isBack && !isLink"
                class="item-next-arrow"
            />
        </a>
        <StoreHamburgerMenuList
            v-if="!isParentItem && item.children"
            :items="item.children"
            :parent-item="item"
            @on-item-click="(link: boolean) => $emit('onItemClick', link)"
            @on-back-item-click="_onItemBackClick"
        />
    </li>
</template>

<script lang="ts" setup>
import classNames from 'classnames';
import type {SideMenuItem} from '~/utils/types/menu';

const {isBack, isLink} = defineProps<{
    class?: string;
    item: SideMenuItem;
    text: string;
    isLink?: boolean;
    isBack?: boolean;
    isBold?: boolean;
    isParentItem?: boolean;
}>();
const emit = defineEmits<{
    onItemClick: [boolean];
}>();
const open = ref(false);

const _onClick = () => {
    open.value = !isBack;
    emit('onItemClick', isLink);
};
const _onItemBackClick = () => {
    open.value = false;
};
</script>

<style></style>
