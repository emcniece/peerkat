import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import _ from 'lodash';

import { TrackingPage } from '../tracking/tracking';

import { Wifi } from '../../providers/wifi';
import { Tracker } from '../../providers/tracker';
import { Storage } from '../../providers/storage';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  savedNetworks: any;
  foundNetworks: any;
  scanMode: any = 'scan';
  netStorage: any = 'saved';
  scanning: boolean = false;
  scanInterval: any;
  manualInputNet: any = {SSID: ''};

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public wifi: Wifi,
    public tracker: Tracker,
    storage: Storage
  ){
    this.scanMode = this.wifi.canScan ? 'scan' : 'manual';

    if(this.wifi.canScan){
      this.wifi.getNetworks().then(nets=>{
        this.savedNetworks = _.map(nets, (net)=>{
          return { SSID: net.replace(/"/g, '') };
        });
      });
    }

    storage.save('todo', 'test1');
  }

  toggleScan(){
    let self = this;

    if(!self.scanning){
      self.wifi.startScan(function(status){
        self.startScan(status);
      });

      self.scanInterval = setInterval(function(){
        self.wifi.checkScan({numLevels: false}, nets=>{
          self.foundNetworks = nets;

          if(nets.length > 0){
            console.log('scanCheck', nets);
            self.stopScan();
          }
        }, console.log)
      }, 1000);
    } else {
      self.stopScan();
    }
  }

  startScan(status){
    this.scanning = true;
    console.log('Scan started', status);
  }

  stopScan(){
    clearInterval(this.scanInterval);
    this.scanning = false;
  }

  isTracked(network){
    return this.tracker.isTracked(network);
  }

  addNetwork(network){
    if(network){
      this.tracker.addNetwork(network);

      let toast = this.toastCtrl.create({
        message: `Network added: ${network.SSID}`,
        duration: 1000,
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
    }
  }

  toggleTrackedNetwork(network){
    if(this.isTracked(network)){
      this.tracker.removeNetwork(network);
    } else{
      this.addNetwork(network);
    }
  }

}
