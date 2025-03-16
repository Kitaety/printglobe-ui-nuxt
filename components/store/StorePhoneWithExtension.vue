<script lang="ts" setup>
const props = defineProps({
	class: String,
	phone: String,
	phoneExt: String
})

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
