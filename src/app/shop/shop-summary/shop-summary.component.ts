import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-shop-summary',
  template: `
<div *ngIf="cart.itemCount > 0" class="alert alert-primary" role="alert">
  <h4 class="alert-heading">Sepet Ürünleri</h4>
  <p class="">Ürün Sayısı : {{cart.itemCount}}</p>
  <hr>
  <p>Sepet Tutarı : {{cart.total}}</p>
</div>
<div *ngIf="cart.itemCount == 0" class="alert alert-warning" role="alert">
  <h6 class="alert-heading">Sepetinizde Ürün Bulunmamaktadır</h6>
  
</div>



  `,
})
export class ShopSummaryComponent {

  constructor(public cart:Cart){



  }

}
