// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt(eslintPluginPrettierRecommended, {
    rules: {
        'vue/html-quotes': ['error', 'double', {avoidEscape: true}],
        'vue/no-v-html': ['off'],
        quotes: ['error', 'single', {avoidEscape: true}],
        'vue/html-self-closing': ['off'],
        'no-console': ['error']
    }
});
