<template>
    <ul class="menu-list">
        <StoreHamburgerMenuListItem
            v-if="!!parentItem"
            :item="parentItem"
            :text="!parentItem.master_category_id ? 'All Categories' : `Back`"
            is-back
            is-parent-item
            @on-item-click="$emit('onBackItemClick')"
        />
        <StoreHamburgerMenuListItem
            v-if="!!parentItem"
            :item="parentItem"
            :text="`All ${parentItem.name}`"
            is-link
            is-bold
            is-parent-item
            @on-item-click="_onItemClick"
        />
        <StoreHamburgerMenuListItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            :text="item.name"
            :is-link="!(item.children && item.children.length) || shouldCategoryBeALink(item)"
            @on-item-click="_onItemClick"
        />
    </ul>
</template>

<script lang="ts" setup>
import type {SideMenuItem} from '~/utils/types/menu';

defineProps<{
    items: SideMenuItem[];
    parentItem?: SideMenuItem;
}>();

const emit = defineEmits<{
    onItemClick: [boolean];
    onBackItemClick: [];
}>();

const shouldCategoryBeALink = (category: SideMenuItem) => {
    // category should work as a link if it only has one subcategory with the same name and link
    if (category.children && category.children?.length !== 1) {
        return false;
    }

    const subCategory = category.children![0];

    return category.url_name === subCategory.url_name && category.name === subCategory.name;
};

const _onItemClick = (isLink: boolean) => emit('onItemClick', isLink);
</script>

<style></style>
