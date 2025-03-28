<template>
    <div
        ref="wrapperRef"
        class="mobile-header"
    >
        <div class="mobile-header-logo">
            <NuxtLink to="/">
                <NuxtImg
                    class="mobile-header-logo-img"
                    :src="logo"
                    :alt="`${businessName} mobile`"
                />
            </NuxtLink>
        </div>
        <div class="mobile-header-icons">
            <div
                class="mobile-header-call"
                @click="onClickPhone"
            >
                <div class="mobile-header-call-img" />
            </div>
            <div
                class="mobile-header-search"
                @click="() => setMobileSearchBar(true)"
            >
                <NuxtImg
                    class="mobile-header-search-img"
                    src="/images/icons/search-icon-mobile.svg"
                    alt="Search"
                />
            </div>
            <div class="mobile-header-cart">
                <NuxtLink to="/cart">
                    <NuxtImg
                        class="mobile-header-cart-img"
                        src="/images/icons/cart-icon-mobile.svg"
                        alt="Cart"
                    />
                </NuxtLink>
            </div>
            <div
                class="mobile-header-hamburger"
                @click="openTray"
            >
                <NuxtImg
                    class="mobile-header-hamburger-img"
                    src="/images/icons/hamburger-icon-mobile.svg"
                    alt="Menu"
                />
            </div>
        </div>
        <StoreSearchBar
            v-if="showMobileSearchBar"
            @set-mobile-search-bar="setMobileSearchBar"
            @before-on-click-autocomplete="beforeOnClickAutocomplete"
        />
        <div
            id="mobile-screen"
            ref="mobileScreen"
            :class="classNames('mobile-header-screen', {frozen: isTrayOpen})"
        />
        <StoreHeaderMobileTray
            :is-open="isTrayOpen"
            @close-tray="closeTray"
        />
        <div
            v-if="showMobileSearchBar"
            className="mobile-search-bar-screen"
            @click="closeSearchBar"
        />
    </div>
</template>

<script lang="ts" setup>
import {NuxtImg} from '#components';
import classNames from 'classnames';
import {defaultBusinessName, defaultMobileLogo} from '~/utils/constants/common';
import {changeContentScrollState} from '~/utils/helpers/browser';
import {clickPhoneNumber} from '~/utils/helpers/common';

const wlCongifStore = useWlConfigStore();
const pageStore = usePageStore();
const wrapperRef = useTemplateRef('wrapperRef');
const mobileScreenRef = useTemplateRef('mobileScreen');

const isTrayOpen = ref(false);
const showMobileSearchBar = ref(false);
const saveScroll = ref(0);

const logo = wlCongifStore.logo || defaultMobileLogo;
const businessName = wlCongifStore.isPartner ? wlCongifStore.business_name : defaultBusinessName;

const onClickPhone = () => {
    clickPhoneNumber(wlCongifStore.phone);
};

const openTray = () => {
    showMobileSearchBar.value = false;
    isTrayOpen.value = true;
};

const closeTray = () => {
    changeContentScrollState(false);
    pageStore.closeAllModals();
    isTrayOpen.value = false;
};

const setMobileSearchBar = (value: boolean) => {
    showMobileSearchBar.value = value;
};
const beforeOnClickAutocomplete = () => {
    setMobileSearchBar(false);
};

const handleClickOutside = (event: Event) => {
    if (!wrapperRef.value) {
        return;
    }

    if (event.target === mobileScreenRef.value) {
        closeTray();
    }
};

const openSearchBar = (value: boolean) => {
    showMobileSearchBar.value = value;
    if (value === true) {
        saveScroll.value = document.body.scrollTop;
        document.body.scrollTop = 0;
    } else {
        document.body.scrollTop = saveScroll.value;
        saveScroll.value = 0;
    }
};

const closeSearchBar = () => openSearchBar(false);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside);
});
</script>

<style></style>
