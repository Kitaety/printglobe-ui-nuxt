<template>
    <div class="transition-initial mega-menu-nav-bar-wrapper">
        <div
            id="mega-menu-wrapper"
            ref="mega-menu-wrapper"
            :class="classNames('mega-menu-wrapper frozen', {open: isOpen})"
            @click="handleClickOutside"
        >
            <div class="mega-menu">
                <div class="menu-header">
                    <div class="header-text">{{ title }}</div>
                    <a
                        href="#"
                        aria-label="Close sidebar menu"
                        @click="closeMenu"
                    >
                        <div class="header-button" />
                    </a>
                </div>
                <StoreHamburgerMenuList
                    :items="masterCategories"
                    @on-item-click="_onItemClick"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames';
import {changeContentScrollState} from '~/utils/helpers/browser';

defineProps<{
    isPartner: boolean;
    title: string;
}>();

const megaMenuWrapper = useTemplateRef<HTMLDivElement>('mega-menu-wrapper');
const masterCategories = useMenuStore().getMegaMenu.masterCats;

const isOpen = ref(false);

const handleClickOutside = (e: Event) => {
    if (e.target === megaMenuWrapper.value) {
        closeMenu();
    }
};

const openMenu = () => {
    changeContentScrollState(true);
    isOpen.value = true;
};

const closeMenu = () => {
    changeContentScrollState(false);
    isOpen.value = false;
};

const _onItemClick = (isLink: boolean) => {
    if (isLink) {
        closeMenu();
    }
};

defineExpose({
    openMenu,
    closeMenu
});
</script>
