import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Address } from './address';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';


@Injectable()
export class AddressService {
  private addresses: Address[] = [];

  constructor() {
    this.addresses.push(new Address(1, 'Home', '315 Muchado Hill Rd', '', 'Alton', 'NH', '03809', 'home'));
    this.addresses.push(new Address(2, 'Hanaford', '80 Wolfeboro Hwy', '', 'Alton', 'NH', '03809', 'cafe'));
    this.addresses.push(new Address(3, 'McDonald\'s', '4 Homestead Pl', '', 'Alton', 'NH', '03809', 'restaurant'));
  }

  fetchAll() {
    return Observable.create(o => {
      o.next(this.addresses);
      o.complete();
    });
  }

  delete(address: Address) {
    _.remove(this.addresses, o => { o.id === address.id });
  }
}
