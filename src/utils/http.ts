import axios, { type AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
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
  const token = localStorage.getItem('token')
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
const responseMsg: { [key: string]: any } = {
  400: 'warning',
  401: 'warning',
  500: 'error'
}
// 响应拦截器
instance.interceptors.response.use((response) => {
  const { status, data } = response
  if (status == 200) {
    switch (data.code) {
      case 200:
        return data
        break
      default:
        ElMessage({
          message: data.msg,
          type: responseMsg[data.code]
        })
        return data
        break
    }
  }
})
export default instance