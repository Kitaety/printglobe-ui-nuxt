<template>
	<div>
		<input type="email" name="email" v-model="email"/>
		<input name="password" v-model="password"/>
		<button v-on:click="onLoging">Login</button>
	</div>
</template>

<script lang="ts" setup>
import { login } from '~/utils/services/profileService';

const profileStore = useProfileStore();
const email = ref('')
const password = ref('')

const onLoging = async () => {
	await login({email: email.value, password: password.value});
	profileStore.setIsLogin(true);
	await profileStore.loadContactInfo();
}
</script>
