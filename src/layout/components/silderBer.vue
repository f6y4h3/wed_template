<template>
  <div class="_silder-item">
    <div v-for="(route, index) of routeList" :key="index">
      <!-- 子集 -->
      <div v-if="route.children?.length">
          <silderBer :router-data="route.children"></silderBer>
      </div>
      <!-- 第一层 -->
      <div v-else>
        <RouterLink :to="route.path">

        </RouterLink>
      </div>
    </div>
    <!-- <el-menu class="el-menu-vertical-demo" :collapse="global.shrinkVal" background-color="#545c64" text-color="#fff"
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
    </el-menu> -->
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoutersStore } from '@/stores/router'
// import { useGlobalStore } from '@/stores/global'
import { RouterLink } from 'vue-router'
defineProps({
  routerData: {
    type: Array<RouterTabel>
  }
})
const routers = useRoutersStore()
// const global = useGlobalStore()
const routeList = reactive<Array<RouterTabel>>(routers.routers.list)

</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

::v-deep .el-menu {
  border: none;
}
</style>
