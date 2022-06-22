<script setup lang="ts">
import PostItem from '../post-item/post-item.vue';
import {usePostStore} from '../../../../store/post';

const postStore = usePostStore();

</script>

<template>
    <PostItem v-for="post of postStore.posts" :post="post" :key="post.id"/>
</template>

<style scope>
    .post {
        margin-top: 15px;
        z-index: -1;
    }
</style>
