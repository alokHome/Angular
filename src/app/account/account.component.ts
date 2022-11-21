import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account-services';
import { LoggingServie } from '../logging-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingServie]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
   
  constructor(//private log:LoggingServie,
    private acc:AccountService){
    }

  onSetTo(status: string) {
    this.acc.updateAccount(this.id,status)
    //this.log.logmyMessage('A server status changed, new status: ' + status);
  }
}
