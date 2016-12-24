import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ActivityPage } from '../pages/activity/activity';
import { ScanPage } from '../pages/scan/scan';
import { TrackingPage } from '../pages/tracking/tracking';
import { TabsPage } from '../pages/tabs/tabs';

import { Wifi } from '../providers/wifi';
import { Tracker } from '../providers/tracker';

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    ScanPage,
    TrackingPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    ScanPage,
    TrackingPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
