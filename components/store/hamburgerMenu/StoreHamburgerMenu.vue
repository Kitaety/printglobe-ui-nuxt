<template>
    <div className="transition-initial mega-menu-nav-bar-wrapper">
        <div
            id="mega-menu-wrapper"
            :class="classNames('mega-menu-wrapper frozen', {open: isOpen})"
            @click="handleClickOutside"
        >
            <div className="mega-menu">
                <div className="menu-header">
                    <div className="header-text">{{ title }}</div>
                    <a
                        href="#"
                        aria-label="Close sidebar menu"
                        @click="closeMenu"
                    >
                        <div className="header-button" />
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

defineProps<{
    isPartner: boolean;
    title: string;
}>();

const masterCategories = useMenuStore().getMegaMenu.masterCats;

const isOpen = useState(() => false);

const handleClickOutside = () => {};
const closeMenu = () => {};
const _onItemClick = () => {};
</script>
