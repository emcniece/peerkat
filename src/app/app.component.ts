import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { Wifi } from '../providers/wifi';
import { Tracker } from '../providers/tracker';
import { Storage } from '../providers/storage';

@Component({
  templateUrl: 'app.html',
  providers: [ Wifi, Tracker, Storage ]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
