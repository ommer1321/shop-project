import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.reporsitory';
import { RestService } from './rest.service';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';


@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  providers: [CategoryRepository,ProductRepository,RestService,Order,OrderRepository]
})
export class ModelModule { }
