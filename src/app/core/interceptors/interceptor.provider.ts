import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './http-request.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
