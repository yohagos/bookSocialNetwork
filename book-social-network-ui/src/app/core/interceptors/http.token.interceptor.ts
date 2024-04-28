import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token.service";


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token =  this.tokenService.token
    //console.warn(token)
    if (token) {
      const authReq = request.clone({
        setHeaders: {
          ... {Authorizarion: `Bearer ${token}`}
        }
      })
      return next.handle(authReq)
    }

    return next.handle(request)
  }
}


