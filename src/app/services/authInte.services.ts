import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Request on this way");
      const modifiedRequest=req.clone({
        headers:req.headers.append('auth','yes')
      })
      return next.handle(req);
    }
    
}