import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { IntercepterService } from './core/services/intercepter.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideRouter(routes,withComponentInputBinding()),
     provideClientHydration(), provideAnimationsAsync(),
     provideAnimationsAsync(),
    importProvidersFrom(),provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withFetch()),
    provideAnimations(), // required animations providers
   // Toastr providers
    provideToastr(
      {
        timeOut: 5000,
      }
    ), 
    // {provide:HTTP_INTERCEPTORS,useClass:IntercepterService,multi:true}
  ]
};
