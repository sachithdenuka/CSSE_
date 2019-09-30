import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../order-status/order-status-services/order.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.page.html',
  styleUrls: ['./purchase-history.page.scss'],
})
export class PurchaseHistoryPage implements OnInit {

  historyItems: any;

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data => {
      this.historyItems = data;
      console.log(this.historyItems);
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
