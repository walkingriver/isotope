import { Component } from '@angular/core';
import { Address, AddressService } from '../core/address-service';
import { AddressDetailPage } from '../address-detail/address-detail';
import { NavController, Slides } from 'ionic-angular';
import { SetupPage } from '../setup/setup';

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
    this._addressService.fetchAll().subscribe(data => this.addresses = data);
  }

  gotoSetup() {
    this.navigation.push(SetupPage)
  }

  newLocation() {
    this.gotoSetup(); // Temp
  }

  selectLocation(address) {
    // Todo: ActionSheet popup
    console.log(address);
  }
}
