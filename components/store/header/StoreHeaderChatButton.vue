<script lang="ts" setup>
import {openChat} from '~/utils/helpers/common';
</script>

<template>
    <div
        class="header-livechat-button-wrapper"
        @click="openChat"
    >
        <a
            href="#"
            class="header-livechat-button"
            aria-label="Open Live Chat"
        >
            <div class="header-chat-icon">
                <span class="icon" />
            </div>
            <div class="header-livechat-text">Live Chat Now!</div>
        </a>
    </div>
</template>
