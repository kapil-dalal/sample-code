import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginForm, User } from '../../model/beans/user';
import { LoginModelService } from '../../model/login/login-model.service';
import { UserService } from '../../services/auth/user.service';
@Component({
   selector: 'app-login',
   templateUrl: 'app/pages/login/login.component.html'
})
export class LoginComponent {
   message: string;
   loginForm: FormGroup;
   userName: FormControl;
   password: FormControl;
   constructor(private fb: FormBuilder,
      private userService: UserService,
      private loginModelService: LoginModelService,
      private router: Router
   ) {
      this.initForm();

   }

   public doLogin() {
      let params: LoginForm = { username: this.userName.value, password: this.password.value };
      this.message = 'Loging in...';
      this.loginModelService.login(params).subscribe(
         (result: User) => {
            this.userService.setUser(result);
            this.router.navigate(['/todoList']);
         },
         (error) => {
            this.message = '';
            alert(error.message);
         }
      );
   }

   private initForm() {
      this.userName = new FormControl('', Validators.required);
      this.password = new FormControl('', Validators.required);
      this.loginForm = this.fb.group({
         userName: this.userName,
         password: this.password
      });
   }
}
