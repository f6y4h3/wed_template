<template>
    <div class="container">
        <router-view v-slot="{ Component, route }">
            <transition name="_content" mode="out-in">
                <KeepAlive :max="10">
                    <component :is="Component" :key="route.path" />
                </KeepAlive>
            </transition>
        </router-view>
    </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: white;

    >.box-card {
        width: 100%;
        height: 100%;

        padding: 0;
    }

    ._content-enter-active {
        transition: all 0.5s ease-out;
    }

    ._content-leave-active {
        transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    ._content-enter-from,
    ._content-leave-to {
        transform: translateX(20px);
        opacity: 0;

    }

}
</style>