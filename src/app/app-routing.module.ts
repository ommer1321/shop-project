import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
      { path: 'shop', component:ShopComponent },
      { path: 'checkout', component:CheckoutComponent },
      { path: 'cart', component:CartDetailComponent },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

      { path: '**', component: ShopComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
