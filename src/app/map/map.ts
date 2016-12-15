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

  constructor(public navCtrl: NavController, private navParams: NavParams,
    private google: GoogleMaps) {
    this.address = navParams.data.address;
    console.log(this.address);
  }

  ionViewDidLoad() {
    console.log('Hello MapPage Page');
    this.google.geocode(this.address)
      .subscribe(data => {
        this.data = data
        console.log(data)
      });
  }
}
