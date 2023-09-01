import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template:`
  
  <router-outlet></router-outlet>
  <!-- <app-shop></app-shop> -->
  

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-project';
}
