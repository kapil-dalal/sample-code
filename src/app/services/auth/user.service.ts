import { Injectable } from '@angular/core';

import { User } from '../../model/beans/user';

@Injectable()
export class UserService {
   private user: User = <User>{};

   public setUser(user: User) {
      this.user = user;
   }

   public getId() {
      return this.user ? this.user.id : undefined;
   }

   public getName() {
      return this.user ? this.user.name : undefined;
   }

   public isAuthenticated() {
      return this.user && this.user.id ? true : undefined;
   }
}
