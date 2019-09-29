import { Component, OnInit } from '@angular/core';
import {UpdateStocksService} from './update-stock-service/update-stocks.service';
import {UpdateStocksDto} from './update-stock-DTO/update-stock-DTO';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.page.html',
  styleUrls: ['./update-stock.page.scss'],
})
export class UpdateStockPage implements OnInit {
  varia: UpdateStocksDto[];
  constructor(private updateStock: UpdateStocksService) { }

  ngOnInit() {
    this.updateStock.getAllStocksForUpdate().subscribe(data => {
      console.log(data);
      this.varia = data;
    });
  }

}
