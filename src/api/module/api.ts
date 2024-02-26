export default {
  getList: { method: 'get', url: '/api/index/list' },
  getCats: { method: 'get', url: '/api/cats' },
  uploadImg: { method: 'post', url: '/api/public/upload' },
  refreshToken: { method: 'get', url: '/api/auth/refresh' } // 刷新令牌
} as request
