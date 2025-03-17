<script lang="ts" setup>
import {openChat} from '~/utils/helpers/common';
</script>

<template>
    <div
        className="header-livechat-button-wrapper"
        @click="openChat"
    >
        <a
            href="#"
            className="header-livechat-button"
            aria-label="Open Live Chat"
        >
            <div className="header-chat-icon">
                <span className="icon" />
            </div>
            <div className="header-livechat-text">Live Chat Now!</div>
        </a>
    </div>
</template>
