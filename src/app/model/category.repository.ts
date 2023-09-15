import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  ngOnInit(): void {}

  getCategory(id: number): Product {
    return this.categories.find((i) => i.id === id);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  addCategory(category: Category) {
    return this.restService.addCategory(category).subscribe((c) => {
      this.categories.push(category);
    });
  }

  updateCategory(category: Category) {
    return this.restService.updateCategory(category).subscribe((c) => {
      this.categories.splice(
        this.categories.findIndex((c) => {
          category.id == c.id;
        }),
        1,
        category
      );
    });
  }

  deleteCategory(category: Category) {
    this.restService.deleteCategory(category).subscribe((c) => {
      this.categories.splice(
        this.categories.findIndex((c) => {
          category.id == c.id;
        }),
        1
      );
    });
  }
}
