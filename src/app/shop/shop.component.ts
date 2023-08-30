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
  constructor(
    private productRepository:ProductRepository,
    private categoryRepository:CategoryRepository,
  ){


  }

  get getProducts():Product[]{

    return this.productRepository.getProducts();

  }

  
  get getCategories():Category[]{

    return this.categoryRepository.getCategories();
    
  }
}
