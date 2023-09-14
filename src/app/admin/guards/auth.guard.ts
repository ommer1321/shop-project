import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

  // Admin Girişi için true olmalıdır bu normalde token ile yapılır ancak ben yapmadım
  authService:boolean = true;

  constructor(
    private router:Router,
    // AuthService Olması lazım normalde
  ){


  }

  
  logout(){
console.log('çıkıs yapıldı');
this.authService = false
this.router.navigateByUrl('/shop')

  }


login(){
  console.log('giris yapıldı');
  this.authService = true
  this.router.navigateByUrl('/admin/main')

  }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(!this.authService){

      this.router.navigateByUrl('/admin/auth')
      return false;

    }

    return true;

  }


}
