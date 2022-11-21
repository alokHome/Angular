import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/authentication.services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  isLoginMode = true;
  isLoading=false;
  error:string=null;
  loginData:Users=null;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.isLoginMode=true;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }
    const email=form.value.email;
    const password=form.value.password;
    this.isLoading=true;
    setTimeout(() => {
      console.log('sleep');
    }, 5000);
    this.authService.signup(email,password).subscribe(respData=>{
      console.log(respData);
      this.isLoading=false;
      this.loginData=respData;
    }, error=>{
      this.error=error.message;
      console.log(this.error);
      this.isLoading=false;
    }
    )
    form.reset();
  }
}
