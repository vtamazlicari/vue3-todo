<template>
    <div class="content">
      <router-view></router-view>
    </div>
</template>
<style scoped lang="scss">
    .content {
        // margin-top: 47px;
        height: calc(100vh - 47px);
        overflow: auto;
    }
</style>
