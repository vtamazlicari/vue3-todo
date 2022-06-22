<script setup lang="ts">
    defineProps<{ isShow: boolean }>();
    const emit = defineEmits(['update:isShow']);
    const hideDialog = () => emit('update:isShow', false);
</script>

<template>
    <div v-if="isShow" @click.stop="hideDialog" class="dialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .dialog {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .5);
        display: flex;

        &__content {
            background-color: white;
            margin: auto;
            min-width: 300px;
            min-height: 50px;
            padding: 15px;
        }
    }
</style>