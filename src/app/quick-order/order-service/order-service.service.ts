import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderDto} from '../order-dto/orderDto';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private _http: HttpClient) { }

}
