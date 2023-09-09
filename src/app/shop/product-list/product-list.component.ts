import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent {

  @Input() products : Product[] = [];
  
  @Output() selectedProduct = new EventEmitter<Product>();

  constructor(
    public cart:Cart,
    public router:Router,

  ){


  }

  addToCart(product: Product) {
    if (product) {
      this.cart.addItem(product);
      this.router.navigateByUrl('/cart');
    }
  }

  productDetailsClick(product:Product){
    console.log(this.selectedProduct );
    this.selectedProduct.emit(product);
    
  }

}
