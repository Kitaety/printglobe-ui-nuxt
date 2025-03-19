<template>
    <div :class="classNames('header-menu', {'fixed-to-top': fixedToTop})">
        <div className="container">
            <ul :class="classNames('header-menu-list', {partner: isPartner})">
                <slot />
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames';

defineProps({
    isPartner: {
        default: false,
        type: Boolean
    },
    fixedToTop: {
        default: false,
        type: Boolean
    }
});
</script>

<style></style>
