import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {BASE_PATH} from './api';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(withInterceptors([])),
      {
          provide: BASE_PATH,
          useValue: 'https://icherniakov.ru/yt-course'
      },
  ]
};
