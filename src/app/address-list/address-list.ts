import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddressService } from '../core/address-service';
import { Address } from '../core/address';
import { AddressDetailPage } from '../address-detail/address-detail';

@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
  providers: [AddressService]
})
export class AddressListPage {
  public addresses: Address[];

  constructor(private navCtrl: NavController, private addressService: AddressService) {
  }

  openDetails(address) {
    this.navCtrl.push(AddressDetailPage, { address });
  }

  ionViewDidLoad() {
    this.addressService.fetchAll().subscribe(data => this.addresses = data);
  }
}
