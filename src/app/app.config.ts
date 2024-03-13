import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // needed for supporting e2e tests
    provideProtractorTestingSupport(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
  ]
};
