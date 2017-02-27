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
  defaultMapInfo = {
    lat: 0,
    lng: 0
  };
  zoom = 18;
  located = false;

  constructor(public navCtrl: NavController, private navParams: NavParams,
    private google: GoogleMaps) {
    this.address = navParams.data.address;
    console.log(this.address);
  }

  ionViewWillEnter() {
    if (!this.located) {
      this.google.getCurrentLocation()
        .subscribe(data => {
          this.defaultMapInfo.lat = data.location.lat;
          this.defaultMapInfo.lng = data.location.lng;
        });
    }
  }

  ionViewDidLoad() {
    if (this.address) {
      this.google.geocode(this.address)
        .subscribe(data => {
          this.located = true;
          console.log(data.results["0"]);
          let loc = data.results["0"].geometry.location;
          this.address.latitude = loc.lat;
          this.address.longitude = loc.lng;
        });
    }
  }

  getLatitude() {
    return this.located ? this.address.latitude : this.defaultMapInfo.lat;
  }

  getLongitude() {
    return this.located ? this.address.longitude : this.defaultMapInfo.lng;
  }

  gotoSetup(fab: FabContainer) {
    fab.close();
    this.navCtrl.push(SetupPage, {}, { animate: true, direction: 'forward' });
  }

  gotoLocations(fab: FabContainer) {
    fab.close();
    this.navCtrl.setRoot(AddressListPage, {}, { animate: true, direction: 'forward' });
  }

  fabColor() {
    return this.address ? "primary" : "danger";
  }
}
