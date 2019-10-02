import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../LoginDto/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged;

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
    return this._http.post('http://localhost:9200/api/login/verify-user', loginDetails);
  }
}
