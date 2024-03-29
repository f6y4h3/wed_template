export default {
  path: '/user',
  name: '用户',
  redirect: '/user/index',
  children: [
    {
      path: '/user/index',
      name: '用户首页',
      component: () => import('@/views/user/index.vue')
    },
    {
      path: '/user/users',
      name: '用户列表',
      component: () => import('@/views/user/users.vue')
    }
  ]
} as RouterTabel
