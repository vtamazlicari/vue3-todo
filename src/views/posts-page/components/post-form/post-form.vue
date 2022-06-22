<script setup lang="ts">
import { ButtonApp } from '../../../../common/components';
import { useEmitPost } from "../../composables";

const emit = defineEmits(['added']);
const { form, submit } = useEmitPost(emit)
</script>

<template>
    <form @submit.prevent="submit" class="form">
        <input v-model="form.title" placeholder="title" type="text" class="form__item"/>
        <ButtonApp type="submit">Submit</ButtonApp>
    </form>
</template>

<style scope lang="scss">
.form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__item {
        width: 100%;
        margin-top: 15px;
        padding: 10px;
        border: 2px solid teal;
    }

    &__button {
        margin-top: 15px;
        border: 2px solid teal;
        background-color: white;
        padding: 10px;
        width: min-content;
    }
}
</style>