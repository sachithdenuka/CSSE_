import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged;

  constructor() {
    this.isLogged = false;
  }

  getIsLogged(){
    return this.isLogged;
  }

  login(){
    this.isLogged = true;
  }
}
