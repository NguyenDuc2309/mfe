import { createApp } from 'vue'
import App from './App.vue'

let app // giữ global instance

export function mount(el) {
  // Nếu container đã có app => unmount trước
  if (app) {
    app.unmount()
  }

  app = createApp(App)
  app.mount(el)

  // cleanup function
  return () => {
    if (app) {
      app.unmount()
      app = null
    }
  }
}
