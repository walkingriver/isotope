import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { googleApps } from './config';
import { Address } from './address';

@Injectable()
export class GoogleMaps {

  constructor(public http: Http) {
    console.log('Hello GoogleMaps Provider');
  }

  geocode(address: Address) {
    const encodedAddress = encodeURIComponent(address.toString());
    const url = `${googleApps.geocodeUrl}address=${encodedAddress}&key=${googleApps.apiKey}`;
    console.log(url);
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getCurrentLocation() {
    const url = `${googleApps.geolocationUrl}&key=${googleApps.apiKey}`;
    console.log(url);
    return this.http.post(url, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
