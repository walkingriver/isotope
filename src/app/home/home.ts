import { Component } from '@angular/core';
import { AddressService } from '../core/address-service';
import { Address } from '../core/address';
import { AddressListPage, SetupPage } from '../pages';
import { FabContainer, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps } from '../core/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AddressService, GoogleMaps]
})
export class HomePage {
  private address: Address;
  private data: any;
  lat = 0;
  lng = 0;
  zoom = 18;
  label = '';

  constructor(public navCtrl: NavController, private navParams: NavParams,
    private google: GoogleMaps) {
    this.address = navParams.data.address;
    console.log(this.address);
  }

  ionViewWillEnter() {
    if (! this.address) {
      this.google.getCurrentLocation()
        .subscribe(data => {
          this.lat = data.location.lat;
          this.lng = data.location.lng;
        });
    }
  }

  ionViewDidLoad() {
    if (this.address) {
      this.google.geocode(this.address)
        .subscribe(data => {
          this.data = data.results["0"].geometry.location;
          console.log(this.data);
          this.lat = this.data.lat;
          this.lng = this.data.lng;
          this.label = this.address.name;
        });
    }
  }

  gotoSetup(fab: FabContainer) {
    fab.close();
    this.navCtrl.push(SetupPage);
  }

  gotoLocations(fab: FabContainer) {
    fab.close();
    this.navCtrl.setRoot(AddressListPage);
  }
}
