import axios, { type AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { getToken, getRefreshToken, setToken } from '@/utils/auth'
import api from '@/api'
const instance: AxiosInstance = axios.create({
  /**请求地址 */
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: '',
  /**超时时间 */
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  // console.log(config, 'config')
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
const responseMsg: { [key: string]: any } = {
  400: 'warning',
  401: 'warning',
  500: 'error'
}
/** 是否在刷新令牌 */
let isRefreshToken = false
// 请求队列
const requestList: Array<any> = []
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { status, data } = response
    if (status == 200) {
      return Promise.resolve(data)
    } else {
      // console.log(222);
      return Promise.reject(data)
    }
  },
  async ({ response }) => {
    const { status, data, config } = response
    if (status == 401) {
      if (!isRefreshToken) {
        isRefreshToken = true
        if (!getRefreshToken()) {
          return Promise.resolve(data)
        }
        try {
          const refreshToken = await api.refreshToken({ refresh_token: getRefreshToken() })
          setToken(refreshToken.data)
          requestList.forEach((cb) => cb())
          return instance(config)
        } catch {
          requestList.forEach((cb) => cb())
          console.log(requestList,'requestList2');
        } finally {
          requestList.length = 0
          isRefreshToken = false
        }
      } else {        
        return new Promise((resolve) => {
          requestList.push(() => {
            config.headers.Authorization = `Bearer ${getToken()}`
            resolve(instance(config))
          })
        })
      }
    } else {
      ElMessage({
        message: data.msg,
        type: responseMsg[data.code]
      })
      return Promise.reject(data)
    }
    // console.log(err, 'err')
  }
)
export default instance
