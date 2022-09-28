import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.getStatus()){
      return next.handle(request);
    }
    const TOKEN_REQUEST : HttpRequest<any> = request.clone({
      params: request.params.set('token',this.authService.token)
    });
    console.log(TOKEN_REQUEST);
    return next.handle(TOKEN_REQUEST);
  }
}
