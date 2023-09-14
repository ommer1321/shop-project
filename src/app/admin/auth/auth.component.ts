import { Component } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  
})
export class AuthComponent {
  constructor(public authGuard:AuthGuard){ }

}
