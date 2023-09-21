<template>
    <div class="container">
        <Transition name="_content">
            <RouterView />
        </Transition>
    </div>
</template>
<script lang="ts" setup>
// improt
import { RouterView } from 'vue-router'

</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: bisque;

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