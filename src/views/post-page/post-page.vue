<script setup lang="ts">
    import { computed } from "@vue/runtime-core";
    import { useRoute } from "vue-router";
    import { usePostStore } from "../../store/post";
    
    const route = useRoute()
    const postStore = usePostStore();
    const post = computed(() => postStore.byId(+route.params.id))
</script>

<template>
    <p><strong>Title:</strong> {{post?.title}}</p>
    <p><strong>Is completed:</strong> {{post?.completed}}</p>
    <p><strong>Author:</strong> {{post?.userId}}</p>
</template>
