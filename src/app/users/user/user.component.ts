import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,OnDestroy {

  users: { id:number , name:string}

  paramSub:Subscription;
  ngOnDestroy(): void {
    this.paramSub.unsubscribe()
  }
  constructor(private router:ActivatedRoute) { }
 

  ngOnInit(): void {
    this.users={ 
      id : this.router.snapshot.params['id'],
      name:this.router.snapshot.params['name']
    };
   this.paramSub = this.router.params.subscribe(
    (params:Params) => {
      this.users.id=params['id'];
      this.users.name=params['name'];
    }
    )
  }

}
