<script lang="ts" setup>
import classNames from 'classnames';
import { defaultBusinessNameLogo } from '~/utils/constants/common';
//TODO page store
const shopByCategory = {
	isOpen: false
};
const wlConfigStore = useWlConfigStore();
const isPartner = wlConfigStore.isPartner;

const businessName = isPartner ? wlConfigStore.business_name : defaultBusinessNameLogo;
useHead({
	title: businessName,
})
</script>

<template>
	<header :class="classNames('public-header', { open: shopByCategory.isOpen })">

	</header>
</template>
