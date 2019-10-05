import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../LoginDto/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged;
  isManager = false;
  constructor(private _http: HttpClient) {
    this.isLogged = false;
  }

  getIsLogged(){
    return this.isLogged;
  }

  setIsLoggedIn(loggedOrWhat) {
    this.isLogged = loggedOrWhat;
  }

  login(loginDetails: LoginDto) {
    this.isLogged = true;
    console.log(loginDetails);
    if (loginDetails.userType === 'Site_Manager') { this.setIsManager(true); } else { this.setIsManager(false) }
    return this._http.post('https://csse-we-29-spring.herokuapp.com/api/login/verify-user', loginDetails);
  }

  setIsManager(isManager: boolean) {
    this.isManager = isManager;
  }

  getIsManager() {
    return this.isManager;
  }
}
