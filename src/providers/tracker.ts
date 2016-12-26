import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class Tracker {

  networks: any = [];

  constructor() {
  }

  addNetwork(net){
    net.actions = {in: true, out: true};
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

  addAction(net, action){
    net.actions[action] = true;
    _.find(this.networks, ['SSID', net.SSID]).actions[action] = true;
    return net;
  }

  removeAction(net, action){
    _.find(this.networks, ['SSID', net.SSID]).actions[action] = false;
    return net;
  }

}
