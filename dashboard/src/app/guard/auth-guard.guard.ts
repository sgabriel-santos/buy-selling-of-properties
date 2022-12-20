import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import jwt_decode from "jwt-decode";
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {

  token = '';
  permission: any;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.token = this._authService.getToken()
    if(!this.token){
      this._router.navigate(['/login']);
      return false;
    }
    if(state.url == '/') return true;

    return true
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
