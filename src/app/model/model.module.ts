import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.reporsitory';
import { RestService } from './rest.service';


@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  providers: [CategoryRepository,ProductRepository,RestService]
})
export class ModelModule { }
