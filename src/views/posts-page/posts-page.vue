<script setup lang="ts">
import PostsList from './components/posts-list/posts-list.vue';
import PostForm from './components/post-form/post-form.vue';
import { DialogApp } from '../../common/components';
import { ButtonApp } from '../../common/components';
import { useToggleDialog, useAddPost } from './composables';

const { isShowDialog, toggleDialog } = useToggleDialog();
const { addPost } = useAddPost(isShowDialog);

</script>

<template>
    <DialogApp v-model:isShow="isShowDialog">
        <PostForm @added="addPost"/>
    </DialogApp>

    <div class="panel">
        <div class="panel__first">
            <div class="top">
            <ButtonApp type="button" @click="toggleDialog" class="top__button">Add post</ButtonApp>
            </div>

            <div class="content">
            <PostsList/>
            </div>
        </div>

        <div class="panel__second">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped lang="scss">
.panel {
    display: flex;
    flex: 8;
    height: 100%;

    &__first {
        flex: 2;
        min-width: 200px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    &__second {
        padding: 5px;
        flex: 6;
        background-color: rgb(243, 238, 238);
    }
}

.top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;

    &__button {
        margin: 5px;
        flex: 1;
    }
}

.content {
    display: flex;
    flex-direction: column;
    flex: 1;
}

</style>
