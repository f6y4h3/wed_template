export default {
  getUser: { method: 'get', url: '/api/auth/profile' },
  userLogin: { method: 'post', url: '/api/auth/login' },
  userRegister: { method: 'post', url: '/api/user/register' }, // 注册
} as request
