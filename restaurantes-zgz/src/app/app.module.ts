import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { SettingsPage } from '../pages/settings/settings';
import { MytabsPage } from '../pages/mytabs/mytabs';

import { MyApp } from './app.component';
import { RestaurantInfoProviderReq } from '../providers/restaurant-info/restaurantRequest';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    SettingsPage,
    MytabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    SettingsPage,
    MytabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantInfoProviderReq
  ]
})
export class AppModule {}
