import { Component } from '@angular/core';
import { AccountService } from './account-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent {
  serverElements = [{
    type:'server',
    name: 'TestServer',
    content:'Just a test'
  }];

  accounts: {name: string,status: string}[]=[];

  constructor(private acct:AccountService){
    this.accounts=acct.accounts;
  }
  onServerAdd(serverData: { serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdd(serverData: { serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
   // this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    //this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
