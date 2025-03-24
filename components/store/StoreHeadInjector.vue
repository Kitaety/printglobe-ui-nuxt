<template>
    <span />
</template>

<script lang="ts" setup>
import {pgTitle} from '~/utils/constants/common';
import {getHeadObjecs} from '~/utils/helpers/head';

const wlConfigStore = useWlConfigStore();
const page = usePageStore();

const metaObject = getHeadObjecs(wlConfigStore, page);

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    style: metaObject.style,
    meta: metaObject.meta,
    script: metaObject.script,
    link: metaObject.link,
    title: metaObject.title || pgTitle,
    noscript: metaObject.noscript
});
</script>
