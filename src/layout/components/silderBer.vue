<template>
  <div class="_silder-item">
    <div v-for="(route, index) of routerData" :key="index">
      <!-- 子集 -->

      <!-- 第一层 -->
      <div class="item">
        <!-- {{ route }} -->
        <RouterLink :to="route.path" @click.stop="() => routeItemClick(route.path, route.children?.length)">
          <span>{{ route.name }}</span>
          <!-- <div v-if="route.children?.length"> -->
          <div :class="['chilen',data.unfold == route.path ? 'unfold' : '']">
            <silderBer :router-data="route.children"></silderBer>
          </div>
          <!-- </div> -->
        </RouterLink>
        <!-- {{ route.name }} -->
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
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
defineProps({
  routerData: {
    type: Array<RouterTabel>
  }
})
/** 需要展开菜单 */
const data= reactive({
  unfold:''
})
const routeItemClick = (path: string, node: number | undefined) => {
  if (node) {
    // console.log(path, 'routeItemClick', node);
    data.unfold = path
  }else{
    data.unfold =''
  }
  // if(routerData.)
  // if(props.routerData)

}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.chilen{
  height: 0;
  opacity: 0;
  transition: all .3s;
}
.unfold{
  height: auto;
  opacity: 1;
}
.item{
  min-height: 30px;
}
// ::v-deep .el-menu {
//   border: none;
// }
</style>
