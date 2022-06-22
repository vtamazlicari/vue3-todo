<script setup lang="ts">
defineProps<{ type: 'button' | 'submit' | 'reset' }>();
</script>

<template>
    <button :type="type" class="btn btn-outline-primary">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.button {
    border: 2px solid teal;
    background-color: white;
    padding: 10px;
}
</style>

