import 'zone.js';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const TAG_NAME = 'mfe-order-app';
let defined = false;

async function ensureDefined() {
  if (!defined) {
    const app = await createApplication(appConfig);
    const element = createCustomElement(App, { injector: app.injector });
    customElements.define(TAG_NAME, element);
    defined = true;
  }
}

export async function mount(el: HTMLElement) {
  await ensureDefined();

  // cleanup nếu có sẵn instance cũ trong container
  const existing = el.querySelector(TAG_NAME);
  if (existing) el.removeChild(existing);

  // mount instance mới
  const node = document.createElement(TAG_NAME);
  el.appendChild(node);

  // cleanup function
  return () => {
    if (el.contains(node)) {
      el.removeChild(node);
    }
  };
}
