import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("usuarioInfo")){

      let user=JSON.parse(localStorage.getItem("usuarioInfo"));
      console.log(user.customerType);

      if(user.customerType==1){
        return true;
      }else{
        this.router.navigate(['/store']);
        return false;
      }

    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
