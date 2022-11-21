import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import  { Grocery } from '../models/grocery.model'
import { GroceryService } from '../services/grocery.services';

@Component({
  selector: 'app-http-start',
  templateUrl: './http-start.component.html',
  styleUrls: ['./http-start.component.css']
})
export class HttpStartComponent implements OnInit {

  loadedPosts=[];
  isFetching=false;
  error=null;
  constructor(private http: HttpClient,private groSrv:GroceryService) {}

  ngOnInit() {
    //this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
   /* this.http.put("http://localhost:9005/admin/grocery",postData.title).subscribe(responseData=>{
      console.log(responseData);
    })
    console.log(postData); */
    this.groSrv.createGroceryList(postData.title);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching=true;
   this.groSrv.fetchPost().subscribe(groceryData=>{
      this.isFetching=false;
      this.loadedPosts=groceryData;
    }, error => {
      this.error=error.message;
    }
  
    );
  }

  onClearPosts() {
    // Send Http request
  }

 /* private fetchPosts(){
    this.isFetching=true;
    this.http.get("http://localhost:9005/admin/grocery")
    .pipe(map(resposneData=> {
      const postArray:Grocery[]=[];
      for(const key in resposneData ){
        console.log("Key value is " + key)
        if(resposneData.hasOwnProperty(key)){
        postArray.push({entry:resposneData[key],id:key})
        }
      }
      return postArray;
    }))
    .subscribe(getData=>{
      this.isFetching=false;
      console.log(getData);
      this.loadedPosts=getData;
    })
  }*/
}
