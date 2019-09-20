import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'quick-order.page.html',
  styleUrls: ['quick-order.page.scss']
})
export class QuickOrderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
