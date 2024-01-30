import router from './router'
import { getToken } from '@/utils/auth'
let _token = ''
const whiteList = ['/login']
router.beforeEach((to, form, next) => {
  console.log(form)

  _token = getToken()
  if (whiteList.includes(to.path)) {
    if (!_token) {
      next()
    } else {
      next({ path: form.path })
    }
  } else {
    if (_token) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
