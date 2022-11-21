import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  defaultQuestion:string;
  answer:'';
  genders=['male','female'];

  constructor() { 
    this.defaultQuestion='pet';
  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form)
  }
}
