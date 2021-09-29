import { KeyValuePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { isArrayTypeNode } from 'typescript';
import { AppUserAuth } from './app-user-auth';
import { LoginMocks } from './login-mocks';
import { SecurityService } from './security.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  securityobj: AppUserAuth = new AppUserAuth;

  //[x: string]: any;
   //auth:AppUserAuth = new AppUserAuth;// = null;
  //[claimName: string]: any;
  constructor(private SecurityService: SecurityService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
    // Get property name on security object to check
    //let auth = this.SecurityService.securityObject[];
    
     let claimName: string = next.data["claimName"];
     //const datast: any =  this.SecurityService.securityObject[];
     if (this.SecurityService.securityObject.isAuthenticated 
          && this.SecurityService.hasClaim(claimName)) 
        {
            return true;
        }
      
      else 
      {
         this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
          return false;
      }
  
  }
  
}


