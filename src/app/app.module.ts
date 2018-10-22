import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// components
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

// servcies
import { AuthGuard } from './services/auth/auth.guard';
import { UserService } from './services/auth/user.service';
import { HttpRequestService } from './services/http/http-request.service';
import { LoginModelService } from './model/login/login-model.service';
import { TodoListModelService } from './model/todo-list/todo-list-model.service';

// routing
import { APP_ROUTER_PROVIDERS } from './app.routes';

let COMPONENTS = [
   LoginComponent,
   HomeComponent,
   TodoListComponent
];

let SERVICES = [
   AuthGuard,
   UserService,
   LoginModelService,
   TodoListModelService,
   HttpRequestService
];

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      APP_ROUTER_PROVIDERS
   ],
   declarations: [AppComponent, ...COMPONENTS],
   bootstrap: [AppComponent],
   // bootstrap: [LoginComponent],
   providers: [...SERVICES]
})
export class AppModule { }
