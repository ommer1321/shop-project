import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template:`
<div class="container">
    <h1>Hello, Bootstrap in Angular!</h1>
    <button class="btn btn-primary">Click me</button>
</div>
  

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-project';
}
