<template>
    <div>
        <div
            class="mobile-header-tray-section-title mobile-expandable-title"
            @click="toggleExpanded"
        >
            {{ title }}
            <span :class="classNames('mobile-header-tray-section-expand', {expanded: isExpanded})" />
        </div>
        <div
            v-for="(s, i) in links"
            :key="i"
            :class="classNames('mobile-header-tray-sub-section', {open: isExpanded})"
        >
            <h2
                v-if="s.name"
                class="mobile-header-tray-section-utility-title"
            >
                {{ s.name }}
            </h2>
            <div class="mobile-header-tray-section-utility-list">
                <div
                    v-for="(link, j) in s.links"
                    :key="j"
                    class="mobile-header-tray-section-link-text"
                >
                    <NuxtLink
                        :to="link.path"
                        @click="$emit('closeTray')"
                    >
                        {{ link.title }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames';

defineProps<{
    title: string;
    links: {
        name?: string;
        links: {
            title: string;
            path: string;
        }[];
    }[];
}>();

defineEmits<{
    closeTray: [];
}>();

const isExpanded = ref(false);

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value;
};
</script>

<style></style>
