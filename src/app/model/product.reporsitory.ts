import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class ProductRepository implements OnInit {
  private products: Product[] = [];

  //   baseUrl: string = 'http://localhost:1453/';
  constructor(private restService: RestService) {
    this.restService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnInit(): void {}

  getProduct(id: number) {
    return this.products.find((i) => i.id === id);
  }

  getProducts(category: Category = null): Product[] {


    if (category) {
      return this.products.filter(p => p.category == category.id);
    } else {      
      return this.products;
    }
  }
}
