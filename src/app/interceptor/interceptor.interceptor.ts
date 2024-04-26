import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor sendo chamado"); 
    var authorization=""+localStorage.getItem("Authorization");
    if(authorization!='' && authorization!=null && authorization!="null"){
      console.log("token JWT: "+authorization);
      const autReq = request.clone({
        headers: request.headers.set("Authorization", authorization)
      })
      return next.handle(autReq);
    } else{
      return next.handle(request);
    }

  }
}
