import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Address, AddressService } from '../core/address-service';
import { MapPage, SetupPage } from '../pages';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AddressService]
})
export class HomePage {
  private _addressService: AddressService;
  private navigation: NavController;
  private addresses: Address[];

  slideOptions = {
    loop: true,
    pager: true
  };

  constructor(public navCtrl: NavController, public addressService: AddressService) {
    this.navigation = navCtrl;
    this._addressService = addressService;
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this._addressService.fetchAll().subscribe(data => this.addresses = _.chunk(data, 3));
  }

  gotoSetup() {
    this.navigation.push(SetupPage)
  }

  newLocation() {
    this.gotoSetup(); // Temp
  }

  selectLocation(address) {
    this.navigation.push(MapPage)
  }

  openLocation(address) {

  }

  removeLocation(address) {
    this._addressService.delete(address);
  }
}
