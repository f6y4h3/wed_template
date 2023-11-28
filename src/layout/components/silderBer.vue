<template>
  <div class="_silder-item">
    <el-menu class="el-menu-vertical-demo" :collapse="global.shrinkVal" router
      background-color="#545c64" text-color="#fff">
      <template v-for="(item, index) of routeList" :key="index">
        <el-sub-menu index="1" v-if="item.children">
          <template #title>
            <!-- <i style="font-style: normal;">用户</i> -->
            <!-- <icon icon="Edit"/> -->
            <el-icon v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group v-for="(children, indexC) of item.children" :key="indexC">
            <el-menu-item :index="children.path">{{ children.name }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item :index="item.path" v-else>
          {{ item.name }}
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
<!-- <template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style> -->
