import './assets/main.css'
import { createApp } from 'vue'
import pinia from './stores/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'https://cdn.jsdelivr.net/npm/element-plus/dist/index.css'
import './api/index'
import './permission'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

// app.use(pinia)
// app.use(router)
// app.use(ElementPlus)

// app.mount('#app')

if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App).use(pinia).use(router).use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      instance.component(key, component)
    }
    instance.mount('#app')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount()
} else {
  const app = createApp(App)
  app.use(pinia)
  app.use(ElementPlus)
  app.use(router)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.mount('#app')
}
