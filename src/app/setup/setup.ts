import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
  public extension: string;
  private navigation: NavController;

  constructor(public navCtrl: NavController) {
    this.navigation = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello SetupPage Page');
  }

  setExtension() {
    this.navigation.setRoot(HomePage)  
  }
}
