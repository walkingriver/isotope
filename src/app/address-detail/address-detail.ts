import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Address } from '../core/address';

@Component({
  selector: 'page-address-detail',
  templateUrl: 'address-detail.html'
})
export class AddressDetailPage {
  public address: Address;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.address = navParams.data.address;
    console.log(this.address);
  }

  ionViewDidLoad() {
    console.log('Hello AddressDetailPage Page');
  }
}
