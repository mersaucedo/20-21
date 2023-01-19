import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpEvent,  HttpHandler,  HttpRequest,} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newreq = req.clone({
      setHeaders: {
        Authorization: 'Bearer',
      },
    });
    return next.handle(newreq);
  }
}
