import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.reporsitory';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  public activatedCategory: Category = null;
  public selectedPage: number = 1;
  public productsPerPage: number = 3;
  public selectedProducts: Product[] = [];

  constructor(
    private productRepository: ProductRepository,
   ) {}

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
   
    this.selectedProducts = this.productRepository.getProducts(
      this.activatedCategory
    );

    return this.selectedProducts.slice(index, index + this.productsPerPage);
  }






  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts().length / this.productsPerPage
      )
    )
      .fill(0)
      .map((v, i) => i + 1);
  }


  changePageSize(size:number){

    this.productsPerPage = size;
    this.changePage(1);

  }
  
  changePage(p: number) {
    this.selectedPage = p;
  }
  getCategory(category:Category){

    this.activatedCategory = category;

  }
}
