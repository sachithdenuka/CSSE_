import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderDto} from '../../quick-order/order-dto/orderDto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  getAllOrders() {
    return this._http.get('https://csse-we-29-spring.herokuapp.com/api/purchase/get-all-purchase-orders');
  }
  insertOrder(order) {
    return this._http.post('https://csse-we-29-spring.herokuapp.com/api/purchase/insert-purchase-order', order);
  }
}
