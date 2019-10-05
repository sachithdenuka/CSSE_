import { Component, OnInit } from '@angular/core';
import {UpdateStocksService} from './update-stock-service/update-stocks.service';
import {UpdateStocksDto} from './update-stock-DTO/update-stock-DTO';
import {LoadingController, ToastController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.page.html',
  styleUrls: ['./update-stock.page.scss'],
})
export class UpdateStockPage implements OnInit {
  varia: UpdateStocksDto[];
  showError = false;
  public updateForm: FormGroup;
  valueToEdit;
  constructor(private updateStock: UpdateStocksService, public toastController: ToastController, public loadingController: LoadingController,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateForm = new FormGroup({
      quantity: new FormControl(null, Validators.required)
    });
    this.updateStock.getAllStocksForUpdate().subscribe(data => {
      console.log(data);
      this.presentLoadingWithOptions();
      this.varia = data;
    });
  }

  showEditField(quantity, index) {
    this.varia[index].setEditable(!this.varia[index].editable);
    this.valueToEdit = quantity;
  }

  updateQuantity(index) {
    const itemToUpdate = {
      itemId: this.varia[index].getItemId(),
      value: this.updateForm.controls.quantity.value
    };
    console.log(this.updateForm.controls);
    if (this.updateForm.controls.quantity.value === null) {
      this.presentToast('Pease Enter quantity!');
    } else {
      this.updateStock.updateItmeQuantity(itemToUpdate).subscribe(data => {
        if(data === true) {
          this.varia[index].setEditable(false);
          this.presentToast('Quantity Updated!');
          location.reload();
        } else {
          this.presentToast('Quantity not updated! Try again.');
          location.reload();
        }
      });
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: 'Please wait...',
      translucent: true,
    });
    return await loading.present();
  }
}
