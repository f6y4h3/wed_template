<template>
  <div class="_silder-item">
    <el-menu class="el-menu-vertical-demo" :collapse="global.shrinkVal" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="(route, index) of routeList" :key="index">
        <el-sub-menu index="1" v-if="route.children">
          <template #title>
            <span>{{ route.name }}</span>
          </template>
          <RouterLink v-for="item of route.children" :key="item.path" :to="item.path">
            <el-menu-item :index="item.path">
              {{ item.name }}
            </el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <RouterLink :to="route.path" v-else>
          <el-menu-item :index="route.path">
            <template #title>
              {{ route.name }}
            </template>
          </el-menu-item>
        </RouterLink>

      </div>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoutersStore } from '@/stores/router'
import { useGlobalStore } from '@/stores/global'
import { RouterLink } from 'vue-router'
const routers = useRoutersStore()
const global = useGlobalStore()
// const isCollapse = ref(false)
const routeList = reactive<Array<RouterTabel>>(routers.routers.list)
console.log(import.meta.env.MODE, import.meta.env.VITE_BASE_URL, 'env');

</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

._silder-item {
  // width: 100%;
  // position: relative;
}

::v-deep .el-menu {
  border: none;
}
// ::v-deep .el-menu-item{
//   background-color: rgb(43, 125, 197);
// }
</style>
