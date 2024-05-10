export default {
  getList: { method: 'get', url: '/api/index/list' },
  getCats: { method: 'get', url: '/api/cats' },
  uploadImg: { method: 'post', url: '/api/public/upload' },
  refreshToken: { method: 'get', url: '/api/auth/refresh' }, // 刷新令牌
  getFriends: { method: 'get', url: '/api/friend/getFriends' }, // 获取好友列表
  handleAddFriend: { method: 'post', url: '/api/friend/addFriend' }, // 获取好友列表
} as request
