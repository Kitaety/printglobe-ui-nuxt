<template>
	<li :class="classNames('autocomplete-result-row', { 'autocomplete-result-row-selected': selected })">
		<NuxtLink class="autocomplete-result" :to="link" @click.prevent="() => emit('clickAutoComplete')">
			<div class="autocomplete-result-thumb" :style="{ backgroundImage: `url(${image})` }" />
			<div class="autocomplete-result-text">{{ ent.decode(text) }}</div>
		</NuxtLink>
	</li>
</template>

<script lang="ts" setup>
import classNames from 'classnames';
import ent from 'ent';

defineProps<{
	selected: boolean,
	link: string,
	text: string,
	image: string,
}>();
const emit = defineEmits<{
	clickAutoComplete: []
}>();
</script>

<style></style>