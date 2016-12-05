import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Address, AddressService } from '../core/address-service';
import { AddressDetailPage } from '../address-detail/address-detail';

@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
  providers: [AddressService]
})
export class AddressListPage {
  private _addressService: AddressService;
  private nav: NavController;
  private addresses: Address[];

  constructor(public navCtrl: NavController, public addressService: AddressService) {
    this.nav = navCtrl;
    this._addressService = addressService;
  }

  openDetails(address) {
    this.nav.push(AddressDetailPage, { address });
  }

  ionViewDidLoad() {
    this._addressService.fetchAll().subscribe(data => this.addresses = data);
  }
}
