import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { setToken } from '@/utils/auth'
import router from '@/router'
import api from '@/api'
interface registerQuery {
  account: string
  password: string
  sex: number
  name: string
}
export const useUserStore = defineStore('user', () => {
  const user = reactive<{ info: User }>({
    info: {
      name: localStorage.getItem('name') || '',
      avatar: localStorage.getItem('avatar') || '',
      id: ''
    }
  })
  const userInfo = computed(() => user.info)
  function setUser(users: User) {
    user.info = users
  }
  async function login(registerQuery: registerQuery) {
    const { data } = await api.userLogin(registerQuery)
    setToken(data)
    setUser({
      name: data.userName ?? '',
      avatar: data.avatar ?? '',
      id: data.userId ?? ''
    })
    router.replace({ path: '/' })
  }
  return { user, userInfo, setUser, login }
})
