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
  public selectedPage :number = 1 ;
  public productsPerPage:number = 3 ;

  constructor(
    private productRepository:ProductRepository,
    private categoryRepository:CategoryRepository,
  ){


  }


  get products():Product[]{
    let index =( this.selectedPage-1) * this.productsPerPage;

    
    return this.productRepository
    .getProducts(this.activatedCategory)
    .slice(index ,index+this.productsPerPage);
   

    
  }

  
  get categories():Category[]{

    return this.categoryRepository.getCategories();
    
  }

  activeCategory(newCategory?:Category){

    this.activatedCategory = newCategory;
    this.productRepository.getProducts(this.activatedCategory );
    
  }


  changePage(p:number){

    this.selectedPage = p;


  }

  
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepository.getProducts().length/this.productsPerPage))
    .fill(0)
    .map((v,i)=>i+1);
    
   }


}
