<template>
	<div>
		<div className="container">
			<div className="autocomplete-wrapper">
				<div v-if="autocomplete.sub_categories.length > 0">
					<h2 className="autocomplete-result-section-title">Category Matches</h2>
					<ul>
						<StoreSearchBarAutoCompleteItem v-for="(result, index) in autocomplete.sub_categories"
							:key="index" :selected="index === selectedIndex" :link="`/${result.url_name}`"
							@click-auto-complete="() => emit('clickAutoComplete')" :image="result.image" :text="result.name" />
					</ul>
				</div>
				<div v-if="autocomplete.products.length > 0">
					<h2 className="autocomplete-result-section-title">Product Matches</h2>
					<ul>
						<StoreSearchBarAutoCompleteItem v-for="(result, index) in autocomplete.products" :key="index"
							:selected="index + autocomplete.sub_categories.length === selectedIndex"
							:link="`/${result.url_name}/${result.id}`" @click-auto-complete="() => emit('clickAutoComplete')"
							:image="result.image" :text="result.name" />
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { SearchBarAutoComplete} from '~/utils/types/searchBar';

defineProps<{
	autocomplete: SearchBarAutoComplete,
	selectedIndex: Number,
}>()
const emit = defineEmits<{
	clickAutoComplete: []
}>();

</script>

<style></style>