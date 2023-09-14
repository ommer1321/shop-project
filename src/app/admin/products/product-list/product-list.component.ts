import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.reporsitory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  constructor(public productRepository:ProductRepository){}

  getProducts() : Product[]{

    return this.productRepository.getProducts()

  }

}
