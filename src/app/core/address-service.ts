import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Address {
  id: number | string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

@Injectable()
export class AddressService {
  private addresses: Address[] = [];

  constructor(public http: Http) {
    this.addresses.push({id: 1, name: 'Home', address1: '315 Muchado Hill Rd', address2: '', city:'Alton', state: 'NH', zip: '03809'});
    this.addresses.push({id: 2, name: 'Hanaford', address1: '80 Wolfeboro Hwy', address2: '', city:'Alton', state: 'NH', zip: '03809'});
    this.addresses.push({id: 3, name: 'McDonald\'s', address1: '4 Homestead Pl', address2: '', city:'Alton', state: 'NH', zip: '03809'});
  }

  fetchAll() {
    return Observable.create(o => {
      o.next(this.addresses);
      o.complete();
    });
  }
}
