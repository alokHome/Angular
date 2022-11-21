import { Injectable } from "@angular/core";
import { LoggingServie } from "./logging-service";

@Injectable()
//@Injectable({providedIn: 'root'})-- other approch, for this no need 
//to add in app compoment provider list
export class AccountService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private log:LoggingServie){

      }

      addAccount(name: string,status: string){
        this.accounts.push({name:name,status:status});
        this.log.logmyMessage('A new server added  ');
      }
      updateAccount(id:number,newStatus:string){
        this.accounts[id].status=newStatus;
        this.log.logmyMessage('A server status changed, new status: ' + newStatus);
      }


}