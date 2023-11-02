import { createRouter, createWebHistory } from 'vue-router'
import { useRoutersStore } from '@/stores/router'
import { nextTick } from 'vue'

// const modules = import.meta.glob('../views/*/*.vue',{ eager: true })
// console.log(modules,'路由地址');
const routers: Record<string, any> = import.meta.glob('./module/*.ts', { eager: true })

const routerList = [] as any[]
for (const router in routers) {
  console.log(routers[router], '单个路由')
  if (routers[router]?.default) {
    routerList.push(routers[router]?.default)
  }
}
nextTick(() => {
  const list = useRoutersStore()
  list.addRouter(routerList)
})
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routerList,
    {
      path: '/',
      redirect: '/index'
    }
  ]
})

export default router
