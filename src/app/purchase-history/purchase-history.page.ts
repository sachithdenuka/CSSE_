import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../order-status/order-status-services/order.service';
import {LoginService} from '../login/login service/login.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.page.html',
  styleUrls: ['./purchase-history.page.scss'],
})
export class PurchaseHistoryPage implements OnInit {

  historyItems: any;

  constructor(private router: Router, private orderService: OrderService, private loginService: LoginService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.orderService.getAllOrders().subscribe(data => {
      this.historyItems = data;
      console.log(this.historyItems);
    });
  }

  goHome() {
    if (this.loginService.getIsManager() === true) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['update-stock']);
    }
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 3000,
      message: 'Please wait...',
      translucent: true,
    });
    return await loading.present();
  }
}
