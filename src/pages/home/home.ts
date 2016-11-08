import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Sentinel } from '../../providers/sentinel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Sentinel]
})
export class HomePage {
  service: any;
  messages = [];

  constructor(public navCtrl: NavController, sentinelService: Sentinel) {

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
