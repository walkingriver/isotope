import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from './home/home';
import { AddressListPage } from './address-list/address-list';
import { AddressDetailPage } from './address-detail/address-detail';
import { SetupPage } from './setup/setup';
// import { SentinelService } from './core/sentinel-service';

@NgModule({
  declarations: [
    MyApp,
    AddressDetailPage,
    AddressListPage,
    HomePage,
    SetupPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddressDetailPage,
    AddressListPage,
    HomePage,
    SetupPage
  ],
  providers: []
})
export class AppModule { }
