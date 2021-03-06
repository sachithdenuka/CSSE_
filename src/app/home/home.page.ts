import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StocksService} from '../stocks/stocks-service/stocks.service';
import {LoginService} from '../login/login service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  isLow = false;
  lowQuantity: number;

  constructor(
      private router: Router,
      private stocksService: StocksService,
      private loginService: LoginService
  ) {}

  ngOnInit(): void {

    if (!this.loginService.getIsLogged()) {
      this.router.navigate(['login']);
    }

    let quantity = 0;
    let items;
    this.stocksService.getAllStocksForSite('something').subscribe(data => {
      items = data;
      console.log(data);
      for (let i = 0; i < items.length; i++) {
        if (items[i].critical) {
          quantity += 1;
        }
      }
      if (quantity > 0) {
        this.isLow = true;
        this.lowQuantity = quantity;
      } else {
        this.isLow = false;
        this.lowQuantity = 0;
      }
    });

  }

  navigateToStocks() {
    this.router.navigate(['stocks']);
  }
  navigateToQuickOrder() {
    this.router.navigate(['quick_order']);
  }
  navigateToOrderStatus() {
    this.router.navigate(['order_status']);
  }
  navigateToPurchaseHistory() {
    this.router.navigate(['purchase_history']);
  }

}
