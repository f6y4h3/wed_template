import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  /**环境变量 */
  const env = loadEnv(mode, process.cwd())
  console.log(env.VITE_BASE_URL, 'env.VITE_BASE_URL')
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true, //启动项目自动弹出浏览器
      port: Number(env.VITE_PORT), //启动端口
      proxy: {
        /** api 的请求接口代理 */
        '^/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite(path){
            return path.replace(/^\/api/, '')
          }
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
      // cors:true
    }
  }
})
