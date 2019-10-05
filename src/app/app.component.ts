import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginService} from './login/login service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Smart PO System',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Stocks',
      url: '/stocks',
      icon: 'albums'
    },
    {
      title: 'Quick Order',
      url: '/quick_order',
      icon: 'clipboard'
    },
    {
      title: 'Order Status',
      url: '/order_status',
      icon: 'checkbox'
    },
    {
      title: 'Purchase History',
      url: '/purchase_history',
      icon: 'bookmarks'
    }
  ];
  public pages = [
    {
      title: 'Update Stocks',
      url: '/update-stock',
      icon: 'home'
    },
    {
      title: 'History',
      url: '/purchase_history',
      icon: 'albums'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getListToLoggedUser() {
    if (this.loginService.getIsManager() === true) {
      return this.appPages;
    } else {
      return this.pages;
    }
  }
  logOut() {

  }
}
