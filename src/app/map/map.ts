import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Address } from '../core/address';
import { GoogleMaps } from '../core/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [GoogleMaps]
})
export class MapPage {
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
    this.lat = 28.3123066;
    this.lng = -81.55414720000002;
    this.label = "X";
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
}
