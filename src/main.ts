import App from './App.vue'
import { createApp } from 'vue'
import './assets/main.css'
import './style.css'
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
