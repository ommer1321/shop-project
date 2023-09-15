import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';


@Injectable({
  providedIn: 'root',
})
export class RestService {
  baseUrl: string = 'http://localhost:1453/';
  constructor(private http: HttpClient) {}

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+'products'); 
  }


  getCategories():Observable<Category[]>{

    return this.http.get<Category[]>(this.baseUrl+'categories');
  }

  saveOrder(order:Order): Observable<Order>{

    return this.http.post<Order>(this.baseUrl+'orders',order); 

  }

  addProduct(product:Product):Observable<Product>{

    return  this.http.post<Product>(this.baseUrl+'products',product)

  }

  
  updateProduct(product:Product):Observable<Product>{

    return  this.http.put<Product>(this.baseUrl+'products/'+product.id,product)

  }

  deleteProduct(product:Product):Observable<Product>{

    return this.http.delete<Product>(this.baseUrl+'products/'+product.id)

  }

  addCategory(category:Category):Observable<Category>{

    return this.http.post<Category>(this.baseUrl+'categories/',category) 

  }

  updateCategory(category:Category):Observable<Category>{

    return this.http.put<Category>(this.baseUrl+'categories/'+category.id,category)
  }


  deleteCategory(category:Category):Observable<Category>{

    return this.http.delete<Category>(this.baseUrl+'categories/'+category.id)

  }

  
}
