import './assets/main.css'
import { createApp } from 'vue'
import pinia from './stores/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './api/index'
import './permission' 

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
	
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
