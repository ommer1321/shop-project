import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
  constructor(private categoryRepository: CategoryRepository, private router: Router) {}

  getCategories() {
    return this.categoryRepository.getCategories();
  }

  deleteCategory(category:Category){

    this.categoryRepository.deleteCategory(category)
    return this.router.navigateByUrl('/admin/main/categories')

  }
}
