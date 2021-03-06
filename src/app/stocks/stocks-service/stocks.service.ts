import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StocksDto} from '../DTO/stocksDto';
import {map} from 'rxjs/operators';
import {SuppliersDto} from '../DTO/supplierDto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private _http: HttpClient) {
  }

  getAllStocksForSite(siteId: string) {
    return this._http.get('https://csse-we-29-spring.herokuapp.com/api/item/get-all-items-for-site-manager').pipe(
        map((data: any[]) => data.map((item: any) => {
          const model = new StocksDto();
          Object.assign(model, item);
          console.log(model);
          return model;
        }))
    );
  }

  getSuppliersForItem(itemId: string) {
      return this._http.get('assets/suppliers.json').pipe(
          map((data: any[]) => data.map((item: any) => {
              const model = new SuppliersDto();
              Object.assign(model, item);
              return model;
          }))
      );
  }

}
