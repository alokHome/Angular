import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Grocery } from "../models/grocery.model";


@Injectable({
    providedIn:'root'
})
export class GroceryService{

    constructor(private http:HttpClient){}
    createGroceryList( grocery:string){
        const postData: Grocery={entry:grocery};
        this.http.put("http://localhost:9005/admin/grocery",postData.entry).subscribe(responseData=>{
            console.log(responseData);
          })
          console.log(postData);
    }

    fetchPost(){
       return this.http.get("http://localhost:9005/admin/grocery",{
        headers: new HttpHeaders({ 'custom-header' :'Hello'}),
        params:new HttpParams().set('print','Hello-World')
       })
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
      }
    
}