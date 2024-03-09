import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { UserService } from '../Services/UserService/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.getCookie('user_token'); // Récupérer le token du cookie

      if (token && this.authservice.checkIfAdmin(token)) {
        return true;
      } else {
        alert('Please login as admin to access this interface.');
        return this.router.parseUrl('/login');
      }
    }
  
    // Méthode pour récupérer le cookie
    private getCookie(name: string): string {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
      return '';
    }
    
}