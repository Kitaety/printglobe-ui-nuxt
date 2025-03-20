<template>
    <div>
        <div class="container">
            <div class="autocomplete-wrapper">
                <div v-if="autocomplete.sub_categories.length > 0">
                    <h2 class="autocomplete-result-section-title">Category Matches</h2>
                    <ul>
                        <StoreSearchBarAutoCompleteItem
                            v-for="(result, index) in autocomplete.sub_categories"
                            :key="index"
                            :selected="index === selectedIndex"
                            :link="`/${result.url_name}`"
                            :image="result.image"
                            :text="result.name"
                            @click-auto-complete="() => emit('clickAutoComplete')"
                        />
                    </ul>
                </div>
                <div v-if="autocomplete.products.length > 0">
                    <h2 class="autocomplete-result-section-title">Product Matches</h2>
                    <ul>
                        <StoreSearchBarAutoCompleteItem
                            v-for="(result, index) in autocomplete.products"
                            :key="index"
                            :selected="index + autocomplete.sub_categories.length === selectedIndex"
                            :link="`/${result.url_name}/${result.id}`"
                            :image="result.image"
                            :text="result.name"
                            @click-auto-complete="() => emit('clickAutoComplete')"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type {SearchBarAutoComplete} from '~/utils/types/searchBar';

defineProps<{
    autocomplete: SearchBarAutoComplete;
    selectedIndex: number;
}>();
const emit = defineEmits<{
    clickAutoComplete: [];
}>();
</script>

<style></style>
