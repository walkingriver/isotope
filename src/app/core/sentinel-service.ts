import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serverUrl } from './config';

/*
  Generated class for the Sentinel provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SentinelService {

  constructor(public http: Http) {
    console.log('Hello SentinelService Provider');
    this.http = http;
  }

  findAll() {
    const messagesUrl = serverUrl + '/message/list/';
    return this.http.get(messagesUrl)
      .map(res => res.json())
      .catch(this.handleError);
  } 

  // favorite(property) {
  //     let body = JSON.stringify(property);
  //     let headers = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: headers });
  //     return this.http.post(favoritesURL, body, options)
  //         .map(res => res.json())
  //         .catch(this.handleError);
  // }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

