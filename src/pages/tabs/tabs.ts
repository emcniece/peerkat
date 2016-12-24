import { Component } from '@angular/core';

import { TrackingPage } from '../tracking/tracking';
import { ActivityPage } from '../activity/activity';
import { ScanPage } from '../scan/scan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ActivityPage;
  tab2Root: any = TrackingPage;
  tab3Root: any = ScanPage;

  constructor() {

  }
}
