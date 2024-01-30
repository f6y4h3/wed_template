<template>
  <div class="_silder-item">
    <el-menu class="el-menu-vertical-demo" :collapse="global.shrinkVal" router background-color="#545c64"
      text-color="#fff">
      <template v-for="(item, index) of routeList" :key="index">
        <el-sub-menu index="1" v-if="item.children && !item.hidden">
          <template #title>
            <el-icon v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            <i v-if="!item.icon && global.shrinkVal" style="font-style: normal;">{{ item.meta?.name }}</i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group v-for="(children, indexC) of item.children" :key="indexC">
            <el-menu-item :index="children.path">{{ children.name }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item :index="item.path" v-else-if="!item.children && !item.hidden">
          <el-icon v-if="item.icon">
            <component :is="item.icon"></component>
          </el-icon>
          <i v-if="!item.icon && global.shrinkVal" style="font-style: normal;">{{ item.meta?.name }}</i>
          <template #title>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoutersStore } from '@/stores/router'
import { useGlobalStore } from '@/stores/global'
defineProps({
  routerData: {
    type: Array<RouterTabel>
  }
})
const routers = useRoutersStore()
const global = useGlobalStore()
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