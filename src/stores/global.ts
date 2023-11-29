import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const shrink = ref(false)
  const shrinkVal = computed(() => shrink.value)
  /**改变收缩侧边栏 */
  function changeShrink(){
    shrink.value = !shrink.value
  }
  return { shrink, shrinkVal, changeShrink }
})
