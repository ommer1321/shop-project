import { Injectable } from '@angular/core';
import { CartItem } from './cartItem.model';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public items: CartItem[] = [];
  public itemCount: number = 0;
  public total: number = 0;
  
  
  constructor() {}

  addItem(product: Product, quantity: number = 1) {
    let item = this.items.find((i) => i.product.id == product.id);

    if (item && item != undefined) {
      item.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }

    this.calculate();
  }

  calculate() {
    (this.itemCount = 0), (this.total = 0);

    this.items.forEach((item) => {
      this.itemCount += item.quantity;
      this.total += item.quantity * item.product.price;
    });
  }

  removeItem(id: number) {
    let index = this.items.findIndex((i) => i.product.id == id);
    if (index) {
      this.items.splice(index, 1);

      this.calculate();
    }
  }

  updateQuantity(prouduct: Product, quantity: number) {
    let item = this.items.find((i) => i.product.id == prouduct.id);

    if (item && item != undefined) {
      item.quantity = quantity;
    }

    this.calculate();
  }

  clear() {
    this.items = [];
    this.itemCount = 0;
    this.total = 0;
  }
}
