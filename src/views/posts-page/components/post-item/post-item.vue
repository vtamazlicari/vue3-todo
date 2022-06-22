<script setup lang="ts">
import { Post } from '../../../../common/types';

    defineProps<{ post: Post }>();
</script>

<template>
    <router-link :to="{ name: 'post-item', params: { id: post.id }  }" class="item">{{post.title}}</router-link>
</template>

<style scoped lang="scss">
    .item {
        padding: 10px 5px;
        text-decoration: none;
        color: #c75b5b;

        &:hover {
            background-color: #ece7e7;
        }
    }
</style>