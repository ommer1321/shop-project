import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers:[
    AuthGuard,
  ]


})
export class AdminModule { }
