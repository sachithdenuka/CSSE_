import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SuppliersDto} from '../DTO/supplierDto';
import {StocksService} from '../stocks-service/stocks.service';

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

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private stocksService: StocksService) { }

    get supplier() {
      return this.orderForm.get('supplier');
    }
    get item() {
      return this.orderForm.get('item');
    }
    get quantity() {
      return this.orderForm.get('quantity');
    }
    get description() {
      return this.orderForm.get('description  ');
    }

  ngOnInit() {
    this.orderForm = new FormGroup({
      supplier: new FormControl('', [Validators.required]),
      item:  new FormControl(),
      quantity:  new FormControl('', [Validators.required]),
      description:  new FormControl()
    });

    this.stocksService.getSuppliersForItem('somthing').subscribe(data => {
      this.suppliers = data;
    })

    this.route.queryParams.subscribe(data => {
      if (this.router.getCurrentNavigation().extras.state) {
      this.stocks = this.router.getCurrentNavigation().extras.state.stockItem;

      } else {
        console.log('No Data');
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
    this.orderForm.setValue({
      supplier: this.suppliers,
      item: this.stocks.itemType,
      quantity: 0,
      description: ''
    });
    this.isOrder = !this.isOrder;
  }

  onOrder() {
    console.log(this.orderForm.value);
  }

}
