import { Component } from '@angular/core';
import { AddressService } from '../core/address-service';
import { Address } from '../core/address';
import { AddressDetailPage, HomePage } from '../pages';
import { FabContainer, NavController } from 'ionic-angular';

@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
  providers: [AddressService]
})

export class AddressListPage {
  public addresses: Promise<Address[]>;

  constructor(public navCtrl: NavController, private addressService: AddressService) {
  }

  ionViewDidLoad() {
    this.addresses = this.addressService.fetchAll();
  }

  selectLocation(address: Address, fab: FabContainer) {
    fab.close();
    this.navCtrl.push(HomePage, { address });
  }

  openLocation(address: Address, fab: FabContainer) {
    fab.close();
    this.navCtrl.push(AddressDetailPage, { address });
  }

  newLocation(fab: FabContainer) {
    fab.close();
    this.navCtrl.push(AddressDetailPage, { address: new Address() });
  }

  removeLocation(address: Address, fab: FabContainer) {
    fab.close();
    this.addressService.delete(address);
  }
}
