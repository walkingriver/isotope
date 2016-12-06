import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SetupPage } from '../setup/setup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {
  private navigation: NavController;

  constructor(public navCtrl: NavController) {
    this.navigation = navCtrl;
  }

  ngOnInit() {
  }

  gotoSetup() {
    this.navigation.push(SetupPage)  
  }
}
