import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/auth/user.service';

@Component({
   selector: 'my-app',
   template: `
   
   <button
      *ngIf="userService.isAuthenticated()"
      (click)="logOut()"
      class="btn btn-default"
      style="position: absolute; right: 0px; top: 0;"
   >
      Logout <b>{{ userService.getName() }}</b>
   </button>
   <div style="position: absolute; top: 50px; height: calc(100% - 50px); overflow: auto; width: 100%">
      <router-outlet></router-outlet>
   </div>
   `,
})
export class AppComponent {
   constructor(public userService: UserService,
      public router: Router) {

   }

   public logOut() {
      this.userService.setUser(undefined);
      this.router.navigate(['/login']);
   }
}
