import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { app } from '../core/config';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
  title = app.title;
  
  public extension: string;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello SetupPage Page');
  }

  setInfo() {
    this.navCtrl.setRoot(HomePage)
  }
}
