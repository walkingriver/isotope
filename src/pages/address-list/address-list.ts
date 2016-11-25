import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Address, AddressService } from '../../providers/address-service';

@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
  providers: [AddressService]
})
export class AddressListPage {
  private _addressService: AddressService;
  private addresses: Address[];

  constructor(public navCtrl: NavController, public addressService: AddressService) {
    this._addressService = addressService;
  }

  ionViewDidLoad() {
    this._addressService.fetchAll().subscribe(data => this.addresses = data);
  }
}
