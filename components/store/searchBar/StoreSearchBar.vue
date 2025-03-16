<template>
	{{ state.searchTerm }}
	<div class="search-wrapper" ref="wrapper">
		<form :class="classNames('header-search', { icon: !showText })" @submit="onSubmit">
			<label>
				<span class="offleft"> Start typing, then use the up and down arrows to select an option from the
					list</span>
				<input class="header-search-input" type="text" :value="state.searchTerm" @blur="onSearchTermBlur"
					@input="onSearchTermChanged" ref="inputSearch" />
			</label>
			<span role="status" aria-live="polite" class="offleft" tabIndex="-1">
				{{ countMatchObjects ? `${countMatchObjects} matches found` : '' }}
			</span>
			<button v-if="!!showText" type="submit" class="header-search-button">
				Search
			</button>
			<button v-else type="submit" class="header-search-button icon">
				<img class="search-button-img" src="/images/searchIcon.svg" alt="search" />
			</button>
		</form>
		<StoreSearchBarAutoComplete v-if="!hideAutocomplete && state.showModal" :autocomplete="state.autocomplete"
			:selectedIndex="state.selectedIndex" @onClickAutocomplete="onClickAutocomplete" />
	</div>
</template>

<script lang="ts" setup>
import classNames from 'classnames';
import type { ShallowRef } from 'vue';
import { useSearchStore } from '~/stores/search';
import { isServer } from '~/utils/helpers/common';
import { makeSearch, searchAutocomplete } from '~/utils/services/search';
import type { SearchBarAutoComplete } from '~/utils/types/searchBar';

const props = defineProps({
	showText: Boolean,
	hideAutocomplete: Boolean,
	phoneExt: String,
	keepTerm: Boolean
})
const emit = defineEmits<{
	setMobileSearchBar: [value: boolean],
	beforeOnClickAutocomplete: []
}>()

const state = useState<{
	showModal: boolean,
	searchTerm: string,
	autocomplete: SearchBarAutoComplete,
	selectedIndex: number,
}>(() => ({
	showModal: false,
	searchTerm: '',
	autocomplete: {
		products: [],
		sub_categories: []
	},
	selectedIndex: -1,
}))

const countMatchObjects = computed(() => state.value.autocomplete.products.length + state.value.autocomplete.sub_categories.length);
const wrapper = useTemplateRef('wrapper');
const searchStore = useSearchStore();
const handleClickOutside = (event: MouseEvent | TouchEvent) => {
	if (!(wrapper as Readonly<ShallowRef<HTMLDivElement | null>>) && !(wrapper.value as HTMLDivElement).contains((event.target as Node))) {
		return;
	}

	if (state.value.showModal) {
		state.value.showModal = false;
	}
};

const onSubmit = (e: Event) => {
	e.preventDefault();
	if (state.value.selectedIndex === -1) {
		search();
	}
}
const search = async () => {
	const router = useRoute();
	router.query.q = state.value.searchTerm;

	try {
		const response = await makeSearch(router.query);
		const data = (response.data.value?.data as {products: [], total: number, aggregations: [], params: {}})
		searchStore.setSearchResults(data.products, data.total, data.aggregations, data.params);
		state.value.showModal = false;
		state.value.selectedIndex = -1;
		state.value.searchTerm = props.keepTerm ? state.value.searchTerm : '';
	} catch (err) {
		console.warn('Search failed', err);
		searchStore.clearSearch();
	}

}
const onSearchTermBlur = () => {
	if (state.value.searchTerm) {
		emit('setMobileSearchBar', false)
	}
}
const onSearchTermChanged = (event: Event) => {
	const searchTerm = (event.target as HTMLInputElement).value;
	state.value.searchTerm = searchTerm;
	fetchAutocomplete({ q: searchTerm });
}

const fetchAutocomplete = useDebounce((query: Record<string, any>) => {
	searchAutocomplete(query)
		.then((response) => {
			state.value.showModal = !!query.q;
			state.value.selectedIndex = -1;
			state.value.autocomplete = response.data.value as SearchBarAutoComplete;
			console.log({data: response.data.value});

			if (state.value.autocomplete.products.length > 0 || state.value.autocomplete.sub_categories.length > 0) {
				document.addEventListener('keydown', navigateSearchResults, false);
			} else {
				document.removeEventListener('keydown', navigateSearchResults, false);
			}
		})
		.catch(err => {
			console.warn('autocomplete failed', err);
			state.value.showModal = false;
		});
}, 300)

const navigateSearchResults = (e: KeyboardEvent) => {
	let selectedIndex = state.value.selectedIndex;
	let autocomplete = state.value.autocomplete;
	const router = useRouter()

	const all_results = [
		...autocomplete.sub_categories.map(sc => ({ ...sc, type: 'sub_category' })),
		...autocomplete.products.map(p => ({ ...p, type: 'product' }))
	];
	const total = all_results.length;

	switch (e.code) {
		case 'ArrowUp':
			selectedIndex = selectedIndex + (selectedIndex > -1 ? -1 : 0);
			break;
		case 'ArrowDown':
			selectedIndex = selectedIndex + (selectedIndex < total - 1 ? 1 : 0);
			break;
		case 'Enter':
			if (selectedIndex > -1) {
				if (all_results[selectedIndex].type === 'sub_category') {
					router.replace(`/${all_results[selectedIndex].url_name}`);
				} else {
					router.replace(`/${all_results[selectedIndex].url_name}/${all_results[selectedIndex].id}`);
				}
				state.value.selectedIndex = -1;
				state.value.showModal = false;
				state.value.searchTerm = '';
			}
			break;
		default:
	}
	state.value.selectedIndex = selectedIndex;
};

const onClickAutocomplete = () => {
	emit('beforeOnClickAutocomplete');
	state.value.showModal = false;
	state.value.selectedIndex = -1;
	state.value.searchTerm = '';
}
if (!isServer) {
	document.addEventListener('click', handleClickOutside);
	document.addEventListener('touchstart', handleClickOutside);
}

</script>

<style></style>