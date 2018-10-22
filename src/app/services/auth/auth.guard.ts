import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';


@Injectable()
export class AuthGuard implements CanActivate {
   publicRoutes = {
      '/login': true
   };
   publicPaths = {
      'login': true
   };
   constructor(private userService: UserService, private router: Router) {

   }
   public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let url = this.router.url;
      let path = next.url[0].path;
      if ((!this.publicRoutes[url] || !this.publicPaths[path]) && !this.userService.isAuthenticated()) {
         this.router.navigate(['/login']);
         return false;
      }
      return true;
   }
}
