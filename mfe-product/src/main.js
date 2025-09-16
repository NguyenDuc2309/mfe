import { defineCustomElement } from 'vue'
import App from './App.vue'

// Biến Vue App thành Web Component
const ProductElement = defineCustomElement(App)
customElements.define('product-app', ProductElement)
