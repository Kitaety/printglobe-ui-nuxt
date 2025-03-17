<script lang="ts" setup>
const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    phoneExt: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <span :class="props.class || 'phone'">
        {{ phone }}
        <span v-if="!!phoneExt" />
        <span v-if="!!phoneExt" class="ext-sign">x</span>
        <span v-if="!!phoneExt" />
        {{ phoneExt }}
    </span>
</template>
