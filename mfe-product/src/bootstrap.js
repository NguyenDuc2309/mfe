import { createApp } from 'vue'
import App from './App.vue'

export function mount(el) {
  const app = createApp(App)
  app.mount(el)

  return () => {
    app.unmount()
  }
}
