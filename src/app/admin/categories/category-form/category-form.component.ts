import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent {
  category: Category = new Category();
  editing: boolean = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    private categoryRepository: CategoryRepository,
    private router:Router,
  ) {
    this.editing = this.activatedRoute.snapshot.paramMap.get('mode') == 'edit';

    if (this.editing) {
      this.category = this.categoryRepository.getCategory(
        +this.activatedRoute.snapshot.paramMap.get('id')
      );
    }
  }

  submit() {
    if (!this.category.id) {
      this.categoryRepository.addCategory(this.category);
      return this.router.navigateByUrl('/admin/main/categories')

    }else{

      this.categoryRepository.updateCategory(this.category);
      return this.router.navigateByUrl('/admin/main/categories')

    }
  }
}
