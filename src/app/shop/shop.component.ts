import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.reporsitory';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',

})
export class ShopComponent {

  public activatedCategory: Category= null;

  constructor(
    private productRepository:ProductRepository,
    private categoryRepository:CategoryRepository,
  ){


  }

  get getProducts():Product[]{

    return this.productRepository.getProducts(this.activatedCategory);

  }

  
  get getCategories():Category[]{

    return this.categoryRepository.getCategories();
    
  }

  activeCategory(newCategory?:Category){

    this.activatedCategory = newCategory;
    this.productRepository.getProducts(this.activatedCategory );
  }

}
