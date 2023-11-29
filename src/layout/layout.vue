<template>
  <div class="_layout">
    <div class="_layout-left">
      <el-scrollbar>
        <SilderBer />
      </el-scrollbar>
    </div>
    <div class="_layout-right">
      <div class="_layout-right--top">
        <NavBer />
      </div>
      <div class="_layout-right--bottom">
        <Content />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NavBer, Content, SilderBer } from './components'
import { reactive } from 'vue';
import { useRoutersStore } from '@/stores/router'
// import { useGlobalStore } from '@/stores/global'
const routers = useRoutersStore()
// const global = useGlobalStore()
const routeList = reactive<Array<RouterTabel>>(routers.routers.list)
console.log(routeList)

</script>
<style lang="scss" scoped>
._layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  &-left{
    height: 100%;
    background-color: #545c64;
    color: white;
  }
  &-right{
    display: flex;
    flex-direction: column;
    background-color: #6b7075;
    height: 100vh;
    flex: 1;
    &--bottom{
      // height: ;
      flex: 1;
      overflow: hidden;
    }
  }
}
:deep(.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item){
  padding-left: calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding));
}
:deep(.el-menu-item-group){
  background-color: #3e4144;
}
// :deep(.el-header){
//   padding: 0px;
// }
// :deep(.el-main){
//   padding: 0px;
// }
</style>