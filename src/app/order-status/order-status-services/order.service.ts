import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  getAllOrders() {
    return this._http.get('http://localhost:9200/api/purchase/get-all-purchase-orders');
  }
}
