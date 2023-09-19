<template>
  <div class="_silder-item">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <div v-for="(route, index) of routeList" :key="index">
        <el-sub-menu index="1" v-if="route.children">
          <template #title>
            <span>{{ route.name }}</span>
          </template>
          <el-menu-item-group v-for="item of route.children" :key="item.path">
            <el-menu-item :index="item.path" @click="() => itemClick(item.path)">{{ item.name }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2" @click.stop="()=>itemClick(route.path)" v-else>
          <template #title>{{ route.name }}</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRoutersStore } from '@/stores/router'
import { useRouter } from 'vue-router'
const routers = useRoutersStore()
const router = useRouter()
const isCollapse = ref(false)
const routeList = reactive<Array<RouterTabel>>(routers.routers.list)
const handleOpen = () => {

}
const handleClose = () => {

}
const itemClick = (path: string) => {
  router.push({path})
}
// const click = (path:string)=>{
//   console.log(path,'菜单点击')
//   router.push({path})

// }

// import { RouterLink } from 'vue-router'
// defineProps({
//   routerData: {
//     type: Array<RouterTabel>
//   }
// })
// interface silderListType {
//   list: Array<string>
// }
// const silder = reactive<silderListType>({ list: [] })
// /**侧边栏点击事件 */
// const itemClick = (routerPath: string) => {
//   if (silder.list.includes(routerPath)) {
//     console.log('shak')
//   } else {
//     // console.log('shak')

//   }
// }
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

._silder-item {
  width: 100%;
  padding-left: 10px;
  height: 30px;
  outline: 1px solid red;
  position: relative;

  .childen-item {
    position: absolute;
    top: 30px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
