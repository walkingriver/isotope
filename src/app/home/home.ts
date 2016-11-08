import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SentinelService } from '../core/sentinel-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SentinelService]
})
export class HomePage {
  service: any;
  messages = [];

  constructor(public navCtrl: NavController, sentinelService: SentinelService) {

    this.service = sentinelService;
  }

  ngOnInit() {
    this.service.findAll().subscribe(
      _ => {
        console.log('Got messages: ', _); 
        this.messages = _; 
      }
    );
  }
}
