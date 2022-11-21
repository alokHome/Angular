import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account-services';
import { LoggingServie } from '../logging-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingServie]
})
export class NewAccountComponent {

  constructor(private log:LoggingServie,
    private acc:AccountService){
    }
    onCreateAccount(accName:string,accStatus:string){
      this.acc.addAccount(accName,accStatus);
      //this.log.logmyMessage("New acccount being added");
    }
  
}
