import { Injectable } from '@angular/core';

import { LoginForm } from '../beans/user';

import { HttpRequestService } from '../../services/http/http-request.service';

@Injectable()
export class LoginModelService {
   users: any[] = [
      { id: 1, name: 'Kapil', userName: 'a', password: 'a' },
      { id: 2, name: 'Dalal', userName: 'b', password: 'b' }
   ];

   constructor(private httpRequestService: HttpRequestService) {

   }

   public login(params: LoginForm) {
      let url = 'http://localhost:4000/login';
      return this.httpRequestService.post(url, params);
   }
}
