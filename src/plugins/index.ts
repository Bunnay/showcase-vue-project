import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import type { App } from 'vue'
import router from '@/router'

export function registerPlugins(app: App) {
  app.use(ElementPlus)
  app.use(router)
}
