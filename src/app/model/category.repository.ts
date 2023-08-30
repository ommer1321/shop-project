import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  getCategory(id: number): Product {
    return this.categories.find((i) => i.id === id);
  }
}
