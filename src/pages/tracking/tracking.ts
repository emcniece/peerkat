import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';

import { ScanPage } from '../scan/scan';
import { Tracker } from '../../providers/tracker';

@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html'
})
export class TrackingPage {
  constructor(
    public navCtrl: NavController,
    public tracker: Tracker
  ){

  }

  share(slidingItem) {
    console.log(slidingItem)
  }

  goToScan(){
    this.navCtrl.parent.select(2);
  }
}
