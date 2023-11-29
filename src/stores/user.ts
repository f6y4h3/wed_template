import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = reactive<{ info: User }>({
    info: {
      name: localStorage.getItem('name') || '',
      avatar: localStorage.getItem('avatar') || ''
    }
  })
  const userInfo = computed(() => user.info)
  function setUser(users: User) {
    user.info = users
  }
  return { user, userInfo, setUser }
})
