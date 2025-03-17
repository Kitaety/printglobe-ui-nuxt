<template>
    <span />
</template>

<script lang="ts" setup>
import {getFistOrderScriptsTemplate, getMetaTemplate, getSecondOrderScriptsTemplate, getThemeStyle} from '~/utils/helpers/head';

const wlConfigStore = useWlConfigStore();
const page = usePageStore();

const metaTemplate = getMetaTemplate(wlConfigStore, page);
const firstOrderScriptsTemplate = getFistOrderScriptsTemplate(wlConfigStore, page);
const themeStyle = getThemeStyle(wlConfigStore);
const secondOrderScriptsTemplate = getSecondOrderScriptsTemplate(wlConfigStore, page);

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    style: [...themeStyle.style],
    meta: [...metaTemplate.meta],
    script: [...metaTemplate.script, ...firstOrderScriptsTemplate.script, ...secondOrderScriptsTemplate.script],
    link: [...metaTemplate.link],
    title: metaTemplate.title,
    noscript: [...secondOrderScriptsTemplate.noscript]
});
</script>
