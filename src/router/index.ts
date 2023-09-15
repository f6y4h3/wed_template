import { createRouter, createWebHistory } from 'vue-router'
import { useRoutersStore } from '@/stores/router'
import { nextTick } from 'vue'
// const list = useRoutersStore()
// import HomeView from '../views/HomeView.vue'

// import.meta.globEager
// const modules = import.meta.glob('../views/*/*.vue',{ eager: true })
// console.log(modules,'路由地址');
const routers = import.meta.glob('./module/*.ts', { eager: true })
console.log(routers, '路由模块')
const routerList = [] as any
for (const router in routers) {
  // console.log(routers[router],'单个路由');
  if (routers[router]?.default) {
    routerList.push(routers[router]?.default)
  }
}
nextTick(()=>{
  console.log(routerList,'路由列表')
  const list = useRoutersStore()
  list.addRouter(routerList)
})
// console.log(routerList, '路由列表')
// list.addRouter(routerList)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routerList,
    {
      path: '/',
      redirect: '/index'
    },
    // {
    //   path:'/user',
    //   name:'用户',
    //   redirect:'/user/index',
    //   children:[
    //     {
    //       path:'/user/index',
    //       name:'用户首页',
    //       component:()=>import('@/views/user/index.vue'),
    //     },
    //     {
    //       path:'/user/users',
    //       name:'用户列表',
    //       component:()=>import('@/views/user/users.vue')
    //     }
    //   ]
    // }
  ]
})

export default router
