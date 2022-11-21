import { Component, OnInit } from '@angular/core';
import { LoggingServie } from '../logging-service';

@Component({
  selector: 'app-mydirectives',
  templateUrl: './mydirectives.component.html',
  styleUrls: ['./mydirectives.component.css'],
 // providers : [LoggingServie]
})
export class MydirectivesComponent implements OnInit {

  constructor(private log:LoggingServie) { }

  ngOnInit(): void {
    this.log.logmyMessage('Inside MydirectivesComponent')
  }
  odd=[1,3,5]
  even=[2,4,6]
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

}
