import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { getToken, setToken } from '@/utils/auth'
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
      token: getToken()
    }
  })
  const userInfo = computed(() => user.info)
  function setUser(users: User) {
    user.info = users
  }
  function login(registerQuery: registerQuery) {
    api.userLogin(registerQuery).then((res: any) => {
      setToken(res.data.access_token)
      setUser({
        name: res.name ?? '',
        avatar: res.avatar ?? '',
        token: res.access_token ?? ''
      })
      router.replace({ path: '/' })
    })
  }
  return { user, userInfo, setUser, login }
})
