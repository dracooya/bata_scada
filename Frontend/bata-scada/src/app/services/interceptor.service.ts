import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken: any = localStorage.getItem('user');
    if (req.headers.get('skip')) {
      return next.handle(req);
    }
    if (accessToken) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: accessToken
        }
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
