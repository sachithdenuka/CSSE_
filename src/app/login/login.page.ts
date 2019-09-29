import { Component, OnInit } from '@angular/core';
import {LoginService} from './login service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
      private logineService: LoginService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.logineService.login();
    this.router.navigate(['home']);
  }

}
