import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopSummaryComponent } from './shop-summary/shop-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ShopComponent,
    NavbarComponent,
    ShopSummaryComponent,
    CheckoutComponent,
    CartDetailComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterLink,
  ],
  exports:[ShopComponent,ShopSummaryComponent],
  providers: [ModelModule],
})
export class ShopModule { }
