import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddressDetailPage, AddressListPage,  HomePage, MapPage, SetupPage } from './pages';

@NgModule({
  declarations: [
    MyApp,
    AddressDetailPage,
    AddressListPage,
    HomePage,
    MapPage,
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
    MapPage,
    SetupPage
  ],
  providers: []
})
export class AppModule { }
