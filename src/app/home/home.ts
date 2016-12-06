import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SentinelService } from '../core/sentinel-service';
import { SetupPage } from '../setup/setup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SentinelService]
})
export class HomePage {
  service: any;
  messages = [];
  private navigation: NavController;

  constructor(public navCtrl: NavController, sentinelService: SentinelService) {
    this.service = sentinelService;
    this.navigation = navCtrl;
  }

  ngOnInit() {
    this.service.findAll().subscribe(
      _ => {
        console.log('Got messages: ', _); 
        this.messages = _; 
      }
    );
  }

  gotoSetup() {
    this.navigation.push(SetupPage)  
  }
}
