import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopSummaryComponent } from './shop-summary/shop-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterLink } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    ShopComponent,
    NavbarComponent,
    ShopSummaryComponent,
    CheckoutComponent,
    CartDetailComponent,
    ProductListComponent,
    CategoryListComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports:[ShopComponent,ShopSummaryComponent],
  providers: [ModelModule],
})
export class ShopModule { }
