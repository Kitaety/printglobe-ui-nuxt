<script lang="ts" setup>
import classNames from 'classnames';
import { useWlConfigStore } from '~/stores/wlConfig';
import { defaultAddress1, defaultAddress2, defaultBusinessNameLogo, defaultCity, defaultLogo, defaultPhone, defaultPhoneExt, defaultState, defaultZip } from '~/utils/constants/common';
import { getWindowInnerWidth } from '~/utils/helpers/window';

const wlConfigStore = useWlConfigStore();
const profileStore = useProfileStore();

const showMobileSearchBar = useState(() => false);
const windowWidth = useState(() => getWindowInnerWidth());

const authCookie = useCookie(authCookieName!);
profileStore.setIsLogin(!!authCookie.value);

await profileStore.loadContactInfo();
await wlConfigStore.loadtWlPartnerInfo();
const isPartner = wlConfigStore.isPartner;


const { origin_url } = wlConfigStore;
const logo = isPartner ? wlConfigStore.logo : defaultLogo;
const phone = isPartner ? wlConfigStore.phone : defaultPhone;
const phoneExt = isPartner ? wlConfigStore.phone_ext : defaultPhoneExt;
const address1 = isPartner ? wlConfigStore.address1 : defaultAddress1;
const address2 = isPartner ? wlConfigStore.address2 : defaultAddress2;
const city = isPartner ? wlConfigStore.city : defaultCity;
const state = isPartner ? wlConfigStore.state : defaultState;
const zip = isPartner ? wlConfigStore.zip : defaultZip;
const communicateWithClient = wlConfigStore.communication_approach === CommunicationApproachEnum.communicateWithClient;


</script>

<template>
	<div id="app">
		<div :class="classNames('storefront', { 'no-scroll': showMobileSearchBar })" id="storefront">
			<div class="site-content">
				<StoreHeader />
				<div :class="classNames('site-body', { 'partner-no-chat': isPartner && !communicateWithClient })">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>