import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, Injector } from '@angular/core';
import { provideRouter } from '@angular/router';
import { createApplication } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
