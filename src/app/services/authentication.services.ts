import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Users } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient){}

    signup(email:string,password:string){
        return this.http.post<Users>("http://localhost:9000/loginservice/login",{
            loginName:email,
            password:password
        }).pipe(catchError(this.handleError));
    }
    private handleError(errorRes:HttpErrorResponse){
      let errorMessage = 'An unknown error occurred!';
                if (!errorRes.error || !errorRes.error.error) {
                  return throwError(errorMessage);
                }
                switch (errorRes.error.error.message) {
                  case 'EMAIL_EXISTS':
                    errorMessage = 'This email exists already';
                }
                return throwError(errorMessage);
    }
}