import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { getToken } from '@/utils/auth'
export const useUserStore = defineStore('user', () => {
  const user = reactive<{ info: User }>({
    info: {
      name: localStorage.getItem('name') || '',
      avatar: localStorage.getItem('avatar') || '',
      token: getToken()
    }
  })
  const userInfo = computed(() => user.info)
  function setUser(users: User) {
    user.info = users
  }
  return { user, userInfo, setUser }
})
