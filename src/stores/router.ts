import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRoutersStore = defineStore('routers', () => {
  const routers = reactive({ list: <Array<RouterTabel>>[] })
  const getRouters = computed(() => routers.list)
  function addRouter(list: Array<RouterTabel>) {
    routers.list.push(...list)
  }
  return { routers, getRouters, addRouter }
})
