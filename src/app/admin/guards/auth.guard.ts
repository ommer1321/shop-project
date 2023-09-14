import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

  authService:boolean = false;

  constructor(
    private router:Router,
    // AuthService Olması lazım normalde
  ){


  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(!this.authService){

      this.router.navigateByUrl('/admin/auth')
      return false;

    }

    return true;

  }


}
