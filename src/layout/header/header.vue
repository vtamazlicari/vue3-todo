<template>
    <nav class="nav">
        <router-link :to="{ name: 'home' }" class="nav__item">Home</router-link>
        <router-link :to="{ name: 'posts' }" class="nav__item">Posts</router-link>
    </nav>
</template>

<style scoped lang="scss">
    .nav {
        background-color: #fff;
        padding: 10px;
        position: sticky;
        width: 100%;
        top: 0;
        box-shadow: 0 1px 3px rgb(57 63 72 / 30%);
        z-index: 999;
        
        &__item {
            margin-right: 20px;
            text-decoration: none;
            font-size: 18px;
            color: #c75b5b;
            font-weight: 500;
        }
    }
</style>