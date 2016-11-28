import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from './home/home';
import { AddressListPage } from './address-list/address-list';
import { AddressDetailPage } from '../pages/address-detail/address-detail';
import { SentinelService } from './core/sentinel-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddressListPage,
    AddressDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddressListPage,
    AddressDetailPage
  ],
  providers: []
})
export class AppModule { }
