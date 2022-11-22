import { UserManagementService } from './../../../Shared/Services/user-management.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm : FormGroup | any;

  constructor(
    private readonly ToastrService:ToastrService,
    private readonly UserManagementService:UserManagementService,
    private readonly FormBuilder:FormBuilder,
    private readonly Router:Router
  ) { this.signInFormModel() }

  signInFormModel(){
    this.signInForm =  this.FormBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  userSignIn(){
    let userSignInValues  = this.signInForm.value;
    this.UserManagementService.loginUser(userSignInValues).subscribe((res:any) => {
      this.UserManagementService.setTokenLocalStorage(res.Token);
      if(res.UserPrivilege === 'Admin'){
        this.Router.navigate(['/admin'])
      }else{
        
      }
    })
  }
}
