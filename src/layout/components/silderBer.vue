<template>
  <div class="_silder-item" v-for="(router, index) of routerData" :key="index" @click.stop="() => itemClick(router.path)">
    <div class="text-item">
      <RouterLink :to="router.path">{{ router.name }}</RouterLink>
      <div class="childen-item" v-if="router.children && router.children.length">
        <silderBer :router-data="router.children"></silderBer>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from '@/router';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'
defineProps({
  routerData: {
    type: Array<RouterTabel>
  }
})
interface silderListType {
  list: Array<string>
}
const silder = reactive<silderListType>({ list: [] })
/**侧边栏点击事件 */
const itemClick = (routerPath: string) => {
  if (silder.list.includes(routerPath)) {
    console.log('shak')
  } else {
    // console.log('shak')

  }
}
</script>
<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
._silder-item {
  width: 100%;
  padding-left: 10px;
  height: 30px;
  outline: 1px solid red;
  position: relative;
  .childen-item{
    position: absolute;
    top: 30px;
  }
  &:hover{
    cursor: pointer;
  }
}
</style>
