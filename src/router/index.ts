import { createRouter, createWebHistory } from 'vue-router'
import { useRoutersStore } from '@/stores/router'
import { nextTick } from 'vue'

// const modules = import.meta.glob('../views/*/*.vue',{ eager: true })
// console.log(modules,'路由地址');
const routers: Record<string, any> = import.meta.glob('./module/*.ts', { eager: true })

const routerList = [] as any[]
let data;
for (const router in routers) {
  if (routers[router]?.default) {
    // routerList.push(routers[router]?.default)
    data = routers[router]?.default
    if(!data.icon){
      data.meta = data.name.slice(0,2)
    }
    if(!data.hidden){
      routerList.push(data)
    }
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
      redirect: '/index',
    }
  ]
})

export default router
