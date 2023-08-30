import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ShopComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports:[ShopComponent],
  providers: [ModelModule],
})
export class ShopModule { }
