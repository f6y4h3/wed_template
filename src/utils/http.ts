import axios, {type AxiosInstance} from 'axios'
const instance: AxiosInstance = axios.create({
  /**请求地址 */
  baseURL: import.meta.env.VITE_BASE_URL,
  /**超时时间 */
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  return config
})
// 响应拦截器
instance.interceptors.response.use((response) => {
  return response
})
export default instance;
