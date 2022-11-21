import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private  subscribe:Subscription;
  constructor(private router:Router,private Auth:AuthService ) { }

  ngOnInit(): void {
   const source=interval(1000);
   //this.subscribe=source.subscribe(val=>console.log(val));
   }

   ngOnDestroy(): void {
       this.subscribe.unsubscribe();
   }

  onLoadServer(id:number){
    this.router.navigate(['/servers',5,'edit'], { queryParams:{ allowEdit: '1'},fragment: 'loading'});
  }
  Login(){
    this.Auth.logIn();
  }
  Logout(){
    this.Auth.logOff();
  }
}
