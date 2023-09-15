import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  {path: 'auth', component: AuthComponent},
  {path: 'main', component: AdminComponent ,canActivate:[AuthGuard],

children:[

  {path: 'products', component: ProductListComponent},
  {path: 'products/:mode/:id', component: ProductFormComponent},
  {path: 'products/:mode', component: ProductFormComponent},
  
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:mode/:id', component: CategoryFormComponent},
  {path: 'categories/:mode', component: CategoryFormComponent},
  
  {path: 'orders', component: OrderListComponent},
]
},

  {path: '**', redirectTo: 'auth'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
