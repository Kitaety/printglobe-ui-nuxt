<script lang="ts" setup>
import {contentAnchorLink} from '~/utils/constants/skipToContent';
</script>

<template>
    <div>
        <input
            type="hidden"
            autoFocus
        />
        <a
            className="skip-to-content-link"
            :href="contentAnchorLink"
        >
            Skip to content
        </a>
    </div>
</template>
