import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.reporsitory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  constructor(public productRepository: ProductRepository , private router:Router) {}

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(product: Product) {
     this.productRepository.deleteProduct(product);
    return this.router.navigateByUrl('/admin/main/products')

  }
}
