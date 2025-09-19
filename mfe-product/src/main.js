import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Mount trực tiếp cho standalone app
const app = createApp(App)
app.mount('#app')
