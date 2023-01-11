import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public emailForm: FormGroup | any;

  constructor(
    private readonly FormBuilder:FormBuilder
  ) { 
    this.emailFormInitialization()
  }

  emailFormInitialization(){
    this.emailForm  =  this.FormBuilder.group({
      firstName:new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  sendForm(){
    const formvalue = this.emailForm.value;
    formvalue;
  }

}
