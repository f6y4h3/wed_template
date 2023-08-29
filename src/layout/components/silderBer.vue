<template>
    <div class="container">
        <!-- <p>侧边栏</p> -->
        <div class="" v-for="(router,index) of routers" :key="index">
            <RouterLink to=""></RouterLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
const routers = reactive([])
</script>
<style lang="scss" scoped>
.container{
    height: 100%;
    background-color: aliceblue;
}
</style>