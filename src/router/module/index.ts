// 静态路由定义
export default {
  path: '/index',
  name: '首页',
  component: () => import('@/views/index/index.vue'),
} as RouterTabel
