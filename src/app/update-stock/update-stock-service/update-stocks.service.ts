import { Injectable } from '@angular/core';
import {UpdateStocksDto} from '../update-stock-DTO/update-stock-DTO';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateStocksService {
  constructor(private updateStockHTTP: HttpClient) {
  }

  getAllStocksForUpdate() {
    return this.updateStockHTTP.get('http://localhost:9200/api/item/get-all-items').pipe(
        map((data: any[]) => data.map((item: any) => {
          const model = new UpdateStocksDto();
          Object.assign(model, item);
          return model;
        }))
    );
  }
}
