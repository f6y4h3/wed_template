<template>
    <div class="container">
        <!-- <p>主体容器</p> -->
        <RouterView />
    </div>
</template>
<script lang="ts" setup>
// improt
import { RouterView } from 'vue-router'

</script>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    background-color: bisque;
}
</style>