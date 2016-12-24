import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Tracker {

  networks: any = [];

  constructor() {
  }

  addNetwork(network){
    //if(this.networks.indexOf(network) == -1){
      this.networks.push(network);
    //}
  }

}
