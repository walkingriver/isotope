import { Injectable } from '@angular/core';
import { Address } from './address';

@Injectable()
export class AddressService {
  private addresses: Address[] = [];

  constructor() {
    this.addresses.push(new Address(1, 'Home', '315 Muchado Hill Rd', '', 'Alton', 'NH', '03809', 'home'));
    this.addresses.push(new Address(2, 'Hanaford', '80 Wolfeboro Hwy', '', 'Alton', 'NH', '03809', 'cafe'));
    this.addresses.push(new Address(3, 'McDonald\'s', '4 Homestead Pl', '', 'Alton', 'NH', '03809', 'restaurant'));
  }

  fetchAll() : Promise<Address[]>{
    var p = Promise.resolve<Address[]>(this.addresses);
    return p;
  }

  delete(address: Address) {
  }
}
