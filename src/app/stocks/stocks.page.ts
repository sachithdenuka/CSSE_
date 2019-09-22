import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {StocksDto} from './DTO/stocksDto';
import {StocksService} from './stocks-service/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  allStocks: StocksDto[];
  criticalLock = false;
  searchInput = '';
  constructor(private router: Router, private stocksService: StocksService) { }

  ngOnInit() {
    this.allStocks = this.filterItems();
    this.stocksService.getAllStocksForSite('SI001').subscribe( data => {
        this.allStocks = data;
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }

  compareCritical(quantity: string, criticalLevel: string) {
    if (parseInt(quantity, 10) < parseInt(criticalLevel, 10)) {
      return true;
    }
    return false;
  }

  onClickItem(stocksItem) {
    this.router.navigate(['stocks-content'], {state: {stockItem: stocksItem}});
  }

  showOnlyCritical() {
    this.criticalLock = !this.criticalLock;
  }

  filterItems() {
    if (!this.searchInput) {
      return this.allStocks;
    }
    return this.allStocks.filter(item => {
      return item.itemType.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
}
