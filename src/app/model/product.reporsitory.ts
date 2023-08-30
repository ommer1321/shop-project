import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable({ providedIn: 'root' })

export class ProductRepository implements OnInit {
  private products: Product[] = [];

  //   baseUrl: string = 'http://localhost:1453/';
  constructor(private restService: RestService) {
    this.restService
    .getProducts()
    .subscribe((products) => (this.products = products));

  }

  ngOnInit(): void {
   
  }

  getProduct(id: number) {
    return this.products.find((i) => i.id === id);
  }


  getProducts() : Product[]{
    return this.products;
  }

  
}