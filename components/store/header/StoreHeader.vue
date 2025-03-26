<script lang="ts" setup>
import classNames from 'classnames';
import {usePageStore} from '~/stores/page';
import {defaultBusinessName, defaultLogo, defaultPhone, printglobeUrl} from '~/utils/constants/common';

const pageStore = usePageStore();
const wlConfigStore = useWlConfigStore();
await pageStore.loadDocsAction();

const isPartner = wlConfigStore.isPartner;
const businessName = isPartner ? wlConfigStore.business_name : defaultBusinessName;
const logo = isPartner ? wlConfigStore.logo : defaultLogo;
const phone = isPartner ? wlConfigStore.phone : defaultPhone;
const phoneExt = isPartner ? wlConfigStore.phone_ext : '';
</script>

<template>
    <header :class="classNames('public-header', {open: pageStore?.shopByCategory?.isOpen})">
        <StoreSkipToContentLink />
        <div>
            <div
                v-if="!!pageStore.documents.headerSlogan"
                class="header-slogan"
                v-html="pageStore.documents.headerSlogan"
            />
            <div class="primary-header">
                <div class="container">
                    <div
                        v-if="isPartner"
                        itemscope
                        itemtype="https://schema.org/WebSite"
                    >
                        <link
                            itemprop="url"
                            :href="printglobeUrl"
                        />
                        <meta
                            itemprop="name"
                            :content="defaultBusinessName"
                        />
                    </div>
                    <div class="header-logo-wrapper">
                        <NuxtLink
                            to="/"
                            class="header-logo"
                        >
                            <NuxtImg
                                width="179px"
                                height="160px"
                                :src="logo"
                                :alt="businessName"
                                class="header-logo-img"
                            />
                        </NuxtLink>
                    </div>
                    <div class="search-bar-wrapper">
                        <StoreSearchBar show-text />
                    </div>
                    <div class="header-actions">
                        <div class="header-contact-wrapper">
                            <a
                                href="#"
                                class="header-contact"
                                aria-label="Call to 24-Hour Support"
                            >
                                <div class="header-contact-icon">
                                    <span class="icon" />
                                </div>
                                <div class="header-contact-content">
                                    <div class="label">24-Hour Support</div>
                                    <StorePhoneWithExtension
                                        :phone="phone"
                                        :phone-ext="phoneExt"
                                        class="header-phone"
                                    />
                                </div>
                            </a>
                        </div>
                        <StoreHeaderChatButton />
                    </div>
                </div>
            </div>
        </div>
        <StoreHeaderMenu />
        //TODO MobileHeader
    </header>
</template>
