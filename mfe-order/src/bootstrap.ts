import 'zone.js';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import { App } from './app/app';

let defined = false;

/**
 * Định nghĩa custom element chỉ 1 lần duy nhất
 */
async function ensureDefined() {
  if (defined || customElements.get('mfe-order-app')) {
    defined = true;
    return;
  }

  const app = await createApplication(appConfig);
  const element = createCustomElement(App, { injector: app.injector });
  customElements.define('mfe-order-app', element);

  defined = true;
}

/**
 * Mount Angular app vào container element
 */
export async function mount(el: HTMLElement) {
  await ensureDefined();

  const node = document.createElement('mfe-order-app');
  el.appendChild(node);

  return () => {
    if (el.contains(node)) {
      el.removeChild(node);
    }
  };
}
