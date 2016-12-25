import { Injectable } from '@angular/core';
//import { Platform } from 'ionic-angular';

import { MOCK_WIZARD } from './mock-wifi';

// Needed for non-device operation
declare let WifiWizard: any;

@Injectable()
export class Wifi{

  hasWifi: boolean = false;
  wizard: any = undefined;
  scanning: boolean = false;
  canScan: boolean = true;

  constructor() {
    this.init();
  }

  init(){
    let wizard = undefined;

    if(typeof WifiWizard !== 'undefined'){
      this.hasWifi = true;
      wizard = WifiWizard;
    } else{
      this.hasWifi = false;
      wizard = new MOCK_WIZARD();
      console.warn('Wifi not available - mocking responses.');
    }

    this.wizard = wizard;
  }

  getWizard(){
    return this.wizard;
  }

  getNetworks(){
    let self = this;
    if(!self.wizard) this.init();

    return new Promise((resolve, reject)=>{
      self.wizard.listNetworks((networks)=>{
        resolve(networks);
      }, (error)=>{
        reject('Network list fail:' + error);
        self.canScan = false;
      });

    });
  }

  getInfo(){
    return new Promise((resolve, reject)=>{
      this.wizard.getCurrentSSID(ssid=>{

          this.wizard.isWifiEnabled(enabled=>{
            resolve({SSID: ssid, enabled: enabled});
          }, reject);

      }, reject);
    });
  }

  startScan(cb){
    this.scanning = true;
    return this.wizard.startScan(cb);
  }

  checkScan(options, cb, fail){
    return this.wizard.getScanResults(options, cb, fail);
  }

}
