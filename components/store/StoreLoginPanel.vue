<template>
    <div>
        <input
            v-model="email"
            type="email"
            name="email"
        />
        <input
            v-model="password"
            name="password"
        />
        <button @click="onLoging">Login</button>
    </div>
</template>

<script lang="ts" setup>
import {login} from '~/utils/services/profileService';

const profileStore = useProfileStore();
const email = ref('');
const password = ref('');

const onLoging = async () => {
    await login({email: email.value, password: password.value});
    profileStore.setIsLogin(true);
    await profileStore.loadContactInfo();
};
</script>

<style lang="scss" scoped>
button {
    background-color: red;
}
</style>
