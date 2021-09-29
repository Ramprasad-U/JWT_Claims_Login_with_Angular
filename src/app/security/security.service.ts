import { Injectable } from '@angular/core';
import { of } from 'rxjs';
//import { observable } from 'rxjs';
import { Observable } from 'rxjs';
import { AppUserAuth } from './app-user-auth';
import { LoginMocks } from './login-mocks';
import { AppUser } from './app-user';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: AppUserAuth = new AppUserAuth();
// = new AppUserAuth();
 // static securityObject: any = AppUserAuth;
  
  constructor() { }
  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();
    // Use object assign to update the current object
    // NOTE: Don't create a new AppUserAuth object
    //       because that destroys all references to object
    Object.assign(this.securityObject,
      LoginMocks.find((user: { userName: string; }) => user.userName.toLowerCase() ===
                               entity.userName.toLowerCase()));
    if (this.securityObject.userName !== "") {
      // Store into local storage
      localStorage.setItem("bearerToken",
         this.securityObject.bearerToken);
    }
  
    return of<AppUserAuth>(this.securityObject);
  
}
logout(): void {
  this.resetSecurityObject();
}

resetSecurityObject(): void {
  this.securityObject.userName = "";
  this.securityObject.bearerToken = "";
  this.securityObject.isAuthenticated = false;
  this.securityObject.claims = [];

//  this.securityObject.canAccessResponseMsg = false;


  localStorage.removeItem("bearerToken");
}
  hasClaim(claimType: any): boolean {
    let ret: boolean = false;
    if (typeof claimType === "string") {
      ret = this.isClaimValid(claimType);
    }
    else {
      let claims: string[] = claimType;
      if (claims) {
        for (let index = 0; index < claims.length; index++) {
          ret = this.isClaimValid(claims[index]);
          // If one is successful, then let them in
          if (ret) {
            break;
          }
        }
      }
    }

    return ret;
  }
  private isClaimValid(claimType: string): boolean {
    let ret: boolean = false;
    let auth: AppUserAuth;
    let claimValue: string = '';

    // Retrieve security object
    auth = this.securityObject;
    if (auth) {
      // See if the claim type has a value
      // *hasClaim="'claimType:value'"
      if (claimType.indexOf(":") >= 0) {
        let words: string[] = claimType.split(":");
        claimType = words[0].toLowerCase();
        claimValue = words[1];
      }
      else {
        claimType = claimType.toLowerCase();
        // Either get the claim value, or assume 'true'
        claimValue = claimValue ? claimValue : "true";
      }
      // Attempt to find the claim
      ret = auth.claims.find(
        c => c.claimType.toLowerCase() == claimType
          && c.claimValue == claimValue) != null;
    }

    return ret;
  }


}

