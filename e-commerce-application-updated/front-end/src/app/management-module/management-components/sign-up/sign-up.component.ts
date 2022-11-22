import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/Shared/Services/user-management.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm : FormGroup | any;
  
  constructor(
    public readonly FormBuilder:FormBuilder,
    public readonly UserManagementService:UserManagementService,
    public readonly ToastrService:ToastrService
    ) {  this.myFormModel() }

  ngOnInit(): void {
  }

  myFormModel(){
    this.signUpForm = this.FormBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  registerUser(){
    let userFromValues = this.signUpForm.value;
    this.UserManagementService.registerUser(userFromValues).subscribe((res:any) => {
      res;
      this.signUpForm.reset();
    })
  }

}