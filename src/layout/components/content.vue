<template>
    <div class="container">
        <el-card class="box-card">
            <Transition name="_content">
                <RouterView />
            </Transition>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: bisque;
    >.box-card{
        width: 100%;
        height: 100%;
    }
    ._content-enter-active {
        transition: all 0.5s ease-out;
    }

    ._content-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    ._content-enter-from,
    ._content-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

}
</style>