<script lang="ts" setup>
import classNames from 'classnames';
import {useMenuStore} from '~/stores/menu';
import {useWlConfigStore} from '~/stores/wlConfig';

const wlConfigStore = useWlConfigStore();
const profileStore = useProfileStore();
const menuStore = useMenuStore();

const config = useRuntimeConfig().public;
const showMobileSearchBar = ref(false);

callOnce(async () => {
    const authCookie = useCookie(config.authCookieName);
    profileStore.setIsLogin(!!authCookie.value);
    await Promise.all([
        profileStore.getCart(),
        profileStore.loadContactInfo(),
        wlConfigStore.loadtWlPartnerInfo(),
        menuStore.loadMegaMenu(),
        menuStore.loadThemeMenu()
    ]);
});
</script>

<template>
    <div id="app">
        <div>
            <StoreHeadInjector />
            <img
                height="1"
                width="1"
                :style="{display: 'none'}"
                :src="`https://www.facebook.com/tr?id=${config.fbPixelId}&ev=PageView&noscript=1`"
                alt=" facebook"
            />
            <div
                id="storefront"
                :class="classNames('storefront', {'no-scroll': showMobileSearchBar})"
            >
                <div class="site-content">
                    <StoreHeader />
                    <div :class="classNames('site-body')">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/scss/layout/main.scss';
</style>
