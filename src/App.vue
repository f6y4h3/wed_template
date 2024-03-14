<script setup lang="ts">
// import layout from './layout/layout.vue'
import { onMounted } from 'vue'
import router from '@/router/index'
onMounted(() => {  
  window?.$wujie?.bus.$emit("vue-router", { wedTemplate: router.getRoutes() });
})
</script>

<template>
  <div class="_body">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
._body {
  width: 100%;
  height: 100%;
}
</style>