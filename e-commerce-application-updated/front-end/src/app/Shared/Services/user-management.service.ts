import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private readonly HttpClient:HttpClient 
    ) { }

  registerUser(payLoad:any){
      return this.HttpClient.post('http://localhost:8888/userManagement/userRegister',payLoad)
  }

  loginUser(payLoad:any){
    return this.HttpClient.post('http://localhost:8888/userManagement/userLogin',payLoad);
  }

  setTokenLocalStorage(payLoad:any){
    localStorage.setItem('access-token',payLoad)
  }

  checkIfUserLogin() {
    return localStorage.getItem('access-token') !== null;
  }

}
