import { Component, OnInit } from '@angular/core';
import {LoginService} from './login service/login.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginDto} from './LoginDto/LoginDto';
import {ToastController} from '@ionic/angular';
import {error} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loginStruct: LoginDto;

  constructor(
      private logineService: LoginService,
      private router: Router,
      private formBuilder: FormBuilder,
      private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userType: new FormControl('Site_Manager', Validators.required)
    });
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.loginStruct = new LoginDto(
        this.loginForm.value.userName,
        'Basic=' + window.btoa(this.loginForm.value.password),
        this.loginForm.value.userType
    );
    this.logineService.login(this.loginStruct).subscribe(data => {
      if (data === true && this.loginForm.value.userType === 'Site_Manager') {
        this.logineService.setIsLoggedIn(true);
        this.router.navigate(['home']);
      } else if (data === true && this.loginForm.value.userType === 'Supervisor') {
        this.logineService.setIsLoggedIn(true);
        this.router.navigate(['update-stock']);
      } else {
        this.showEmptyFieldToaster('Please check login details!');
      }
    },
error1 => {
        if (error1.statusText === 'OK') {
        this.showEmptyFieldToaster('Please check login details!');
        } else {
          this.showEmptyFieldToaster(error1.status);
        }
      }
    );
  }

  async showEmptyFieldToaster(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      buttons: [
        {
          text: 'X',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

}
