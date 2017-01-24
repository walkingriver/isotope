import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddressDetailPage, AddressListPage,  HomePage, SetupPage } from './pages';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    AddressDetailPage,
    AddressListPage,
    HomePage,
    SetupPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAt6OqhqDAwY7uded4xVo8qCPlGXBt6mmU'})
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
