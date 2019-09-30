import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from './order-status-services/order.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {

  orderList: any;

  constructor(private router: Router, private orderService: OrderService, public loadingCtrl: LoadingController,) { }

  ngOnInit() {
    this.loadOrderPage();
    this.orderService.getAllOrders().subscribe(data => {
      this.orderList = data;
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }

  async loadOrderPage() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Please wait...',
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  statusClass(status) {
    if (status === 'Waiting for Approval') {
      return 'waiting-for-approval';
    }
    if (status === 'Approved') {
      return 'approved';
    }
    if (status === 'Rejected') {
      return 'rejected';
    }

  }
}
