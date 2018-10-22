import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

// import { } from '';
export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '/todoList', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'todoList', component: TodoListComponent, canActivate: [AuthGuard] },
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
