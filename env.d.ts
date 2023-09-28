/// <reference types="vite/client" />
interface ImportMetaEnv {
  /**请求代理地址 */
  readonly VITE_BASE_URL: string
  /**请求端口号 */
  readonly VITE_PORT: number
  /**是否开启moke数据 */
  readonly VITE_IS_MOKE: boolean
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}