<script lang="ts" setup>
import classNames from 'classnames';
import {useWlConfigStore} from '~/stores/wlConfig';
// import { defaultAddress1, defaultAddress2, defaultCity, defaultLogo, defaultPhone, defaultPhoneExt, defaultState, defaultZip } from '~/utils/constants/common';
// import { getWindowInnerWidth } from '~/utils/helpers/window';
import {CommunicationApproachEnum} from '~/utils/types/partner';

const wlConfigStore = useWlConfigStore();
const profileStore = useProfileStore();
const config = useRuntimeConfig().public;

const showMobileSearchBar = useState(() => false);
// const windowWidth = useState(() => getWindowInnerWidth());

const authCookie = useCookie(config.authCookieName);
profileStore.setIsLogin(!!authCookie.value);

await Promise.all([profileStore.loadContactInfo(), wlConfigStore.loadtWlPartnerInfo()]);

const isPartner = wlConfigStore.isPartner;

// const { origin_url } = wlConfigStore;
// const logo = isPartner ? wlConfigStore.logo : defaultLogo;
// const phone = isPartner ? wlConfigStore.phone : defaultPhone;
// const phoneExt = isPartner ? wlConfigStore.phone_ext : defaultPhoneExt;
// const address1 = isPartner ? wlConfigStore.address1 : defaultAddress1;
// const address2 = isPartner ? wlConfigStore.address2 : defaultAddress2;
// const city = isPartner ? wlConfigStore.city : defaultCity;
// const state = isPartner ? wlConfigStore.state : defaultState;
// const zip = isPartner ? wlConfigStore.zip : defaultZip;
const communicateWithClient = wlConfigStore.communication_approach === CommunicationApproachEnum.communicateWithClient;
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
                    <div :class="classNames('site-body', {'partner-no-chat': isPartner && !communicateWithClient})">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
