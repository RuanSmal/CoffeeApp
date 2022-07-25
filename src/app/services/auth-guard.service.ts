import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
    constructor(
      public AuthenticationService: AuthenticationService
        ) {}

    canActivate(): boolean {
      return this.AuthenticationService.isAuthenticated();
    }

}