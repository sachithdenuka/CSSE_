import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SuppliersDto} from '../stocks/DTO/supplierDto';
import {StocksService} from '../stocks/stocks-service/stocks.service';
import {ToastController} from '@ionic/angular';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'quick-order.page.html',
  styleUrls: ['quick-order.page.scss']
})
export class QuickOrderPage implements OnInit {
  public orderForm: FormGroup;
  suppliers: SuppliersDto[];
  submitted = false;
  isStrech = true;
  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private stocksService: StocksService,
      private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      supplier: new FormControl(this.suppliers, Validators.required),
      item: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
    });

    this.stocksService.getSuppliersForItem('somthing').subscribe(data => {
      this.suppliers = data;
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }
  onOrder() {
    this.submitted = true;

    if (this.orderForm.invalid) {
      this.showEmptyFieldToaster('Please fill the required fields!');
      return;
    }
    this.showEmptyFieldToaster('successful!');
  }

  async showEmptyFieldToaster(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      buttons: [
        {
          text: 'X',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  getSuppliers() {
    if (this.orderForm.value.supplier) {
      let sup: SuppliersDto[];
      sup = this.suppliers.filter(data => {
        return data.supplierId === this.orderForm.value.supplier;
      });
      if (sup.length < 2) { this.isStrech = false; } else { this.isStrech = true; }
      return sup;
    } else {
      return this.suppliers;
    }
  }
}
