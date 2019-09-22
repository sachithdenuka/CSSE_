import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SuppliersDto} from '../DTO/supplierDto';
import {StocksService} from '../stocks-service/stocks.service';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-stocks-content',
  templateUrl: './stocks-content.page.html',
  styleUrls: ['./stocks-content.page.scss'],
})
export class StocksContentPage implements OnInit {
  stocks;
  isOrder = false;
  public orderForm: FormGroup;
  suppliers: SuppliersDto[];
  submitted = false;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private toastController: ToastController,
      public loadingCtrl: LoadingController,
      private formBuilder: FormBuilder,
      private stocksService: StocksService) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      supplier: new FormControl(this.suppliers, Validators.required),
      quantity: new FormControl('', Validators.required)
    });

    this.stocksService.getSuppliersForItem('somthing').subscribe(data => {
      this.suppliers = data;
    });

    this.route.queryParams.subscribe(data => {
      if (this.router.getCurrentNavigation().extras.state) {
      this.stocks = this.router.getCurrentNavigation().extras.state.stockItem;

      } else {
        this.loadStocksPage();
      }
    });
  }

  goHome() {
    this.router.navigate(['stocks']);
  }

  calculateRemaining(quantity: string, criticalLevel: string) {
    return (parseInt(criticalLevel, 10) / parseInt(quantity, 10));
  }

  order() {
    this.isOrder = !this.isOrder;
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

  async loadStocksPage() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Please wait...',
    });
    await loading.present();
    setTimeout(() => {
      this.router.navigate(['stocks']);
      loading.dismiss();
    }, 1000);
  }
}
