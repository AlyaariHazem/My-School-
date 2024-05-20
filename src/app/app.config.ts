import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideRouter(routes,withComponentInputBinding()),
     provideClientHydration(), provideAnimationsAsync(),
     provideAnimationsAsync(),
    importProvidersFrom((HttpClientModule)),
    provideHttpClient(withFetch()),
    provideToastr(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-left',
      }
    ), 
  ]
};
