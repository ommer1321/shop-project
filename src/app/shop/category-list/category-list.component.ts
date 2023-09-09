import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { ProductRepository } from 'src/app/model/product.reporsitory';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
  public activatedCategory: Category = null;


  @Output() category = new EventEmitter<Category>();


constructor(
  private categoryRepository:CategoryRepository,
  private productRepository:ProductRepository,
  ){


}
get categories(): Category[] {
  return this.categoryRepository.getCategories();
}

activeCategory(newCategory?: Category) {
  this.activatedCategory = newCategory;
  this.category.emit(newCategory);
}

}
