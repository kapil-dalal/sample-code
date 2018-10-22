import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpRequestService {
   constructor(private http: Http) {

   }
   public get(url: string) {
      return this.http.get(url)
         .map(result => this.handleResult(result))
         .catch(error => this.handleError(error));
   }

   public post(url: string, params: any) {
      return this.http.post(url, params)
         .map(result => this.handleResult(result))
         .catch(error => this.handleError(error));
   }

   private handleResult(result: any) {
      try {
         return result.json();
      } catch (err) {
         return (Observable.throw(err));
      }
   }

   private handleError(error: Response) {
      // and just throw the error in case the caller is interested in the error
      return Observable.throw(error.json());
   }
}
