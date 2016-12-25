import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class Tracker {

  networks: any = [];

  constructor() {
  }

  addNetwork(net){
    this.networks.push(net);
  }

  removeNetwork(net){
    // _.remove mutates the array!
    _.remove(this.networks, (n)=>{
      return n.SSID == net.SSID;
    });
  }

  isTracked(net){
    return _.findIndex(this.networks, ['SSID', net.SSID]) > -1;
  }

}
