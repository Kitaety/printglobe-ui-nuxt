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
            @on-item-click="_onItemClick"
            @on-back-item-click="_onItemBackClick"
        />
    </li>
</template>

<script lang="ts" setup>
import classNames from 'classnames';
import type {SideMenuItem} from '~/utils/types/menu';

defineProps<{
    class?: string;
    item: SideMenuItem;
    text: string;
    isLink?: boolean;
    isBack?: boolean;
    isBold?: boolean;
    isParentItem?: boolean;
}>();

const open = useState(() => false);

const _onClick = () => {};
const _onItemClick = () => {};
const _onItemBackClick = () => {};
</script>

<style></style>
