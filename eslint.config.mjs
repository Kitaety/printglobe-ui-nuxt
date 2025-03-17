// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
export default withNuxt({
    rules: {
        'vue/html-quotes': ['error', 'double', {avoidEscape: true}],
        'vue/no-v-html': ['off'],
        quotes: ['error', 'single', {avoidEscape: true}],
        'vue/html-self-closing': ['off']
    }
});
