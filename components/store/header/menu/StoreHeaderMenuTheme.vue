<template>
    <StoreHeaderMenuSub
        class="theme-menu"
        border
    >
        <StoreHeaderMenuItem
            v-if="menuStore.themeMenu.events.length > 0"
            class="theme-menu-column"
            no-focus
            :text="formatTitle(menuStore.themeMenu.events_title, defaultTitles.events)"
        >
            <StoreHeaderMenuSub>
                <StoreHeaderMenuItem
                    v-for="item in menuStore.themeMenu.events"
                    ref="childRef"
                    :key="item.sub_category_id"
                    :text="item.sub_category_name"
                    :link="`/${item.sub_category_url_name}`"
                    class="theme-menu-column-item"
                />
            </StoreHeaderMenuSub>
        </StoreHeaderMenuItem>
        <StoreHeaderMenuItem
            v-if="menuStore.themeMenu.holidays.length > 0"
            class="theme-menu-column"
            no-focus
            :text="formatTitle(menuStore.themeMenu.holidays_title, defaultTitles.holidays)"
        >
            <StoreHeaderMenuSub>
                <StoreHeaderMenuItem
                    v-for="item in menuStore.themeMenu.holidays"
                    :key="item.sub_category_id"
                    :text="item.sub_category_name"
                    :link="`/${item.sub_category_url_name}`"
                    class="theme-menu-column-item"
                />
            </StoreHeaderMenuSub>
        </StoreHeaderMenuItem>
        <StoreHeaderMenuItem
            v-if="menuStore.themeMenu.themes.length > 0"
            class="theme-menu-column"
            no-focus
            :text="formatTitle(menuStore.themeMenu.themes_title, defaultTitles.themes)"
        >
            <StoreHeaderMenuSub>
                <StoreHeaderMenuItem
                    v-for="item in menuStore.themeMenu.themes"
                    :key="item.sub_category_id"
                    :text="item.sub_category_name"
                    :link="`/${item.sub_category_url_name}`"
                    class="theme-menu-column-item"
                />
            </StoreHeaderMenuSub>
        </StoreHeaderMenuItem>
        <StoreHeaderMenuItem
            v-if="menuStore.themeMenu.attributes.length > 0"
            class="theme-menu-column"
            no-focus
            :text="formatTitle(menuStore.themeMenu.attributes_title, defaultTitles.attributes)"
        >
            <StoreHeaderMenuSub>
                <StoreHeaderMenuItem
                    v-for="item in menuStore.themeMenu.attributes"
                    :key="item.feature_name"
                    :text="item.feature_name"
                    :link="`/search?attr=${item.feature_name.replace(/\s/g, '%20')}`"
                    class="theme-menu-column-item"
                />
            </StoreHeaderMenuSub>
        </StoreHeaderMenuItem>
    </StoreHeaderMenuSub>
</template>

<script lang="ts" setup>
import {defaultTitles} from '~/utils/constants/shopByOccasion';
import type StoreHeaderMenuItem from './StoreHeaderMenuItem.vue';
type StoreHeaderMenuItemType = InstanceType<typeof StoreHeaderMenuItem>;

const childRef = useTemplateRef<StoreHeaderMenuItemType[]>('childRef');
const formatTitle = (title: string | undefined, defaultValue: string) => (title || defaultValue).toUpperCase();

const menuStore = useMenuStore();

const focus = () => {
    nextTick(() => {
        if (childRef.value && childRef.value[0]) {
            childRef.value[0].focus();
        }
    });
};

defineExpose({
    focus
});
</script>
