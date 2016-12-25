import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import _ from 'lodash';

@Injectable()
export class Storage {
  db: any;

  constructor() {
    let self = this;
    let openReq = window.indexedDB.open("peerkat");

    openReq.onupgradeneeded = function (event: any) {
      var db = event.target.result;
      db.createObjectStore('activity', {autoIncrement: true});
      db.createObjectStore('networks', {autoIncrement: false});
    };

    openReq.onsuccess = function (event: any) {
      self.db = event.target.result;
      console.warn('Storage initialized');
    }
    openReq.onerror = function (event) {
      console.error("Storage init error", event);
    }
  }

  txSuccess(event){
    //console.log('Storage success', event);
  }

  txError(event){
    console.log('Storage error', event);
  }

  save(key, value){
    try{
      var addReq = this.db.transaction(key, "readwrite")
        .objectStore(key)
        .add(value);

      addReq.onsuccess = this.txSuccess;
      addReq.onerror = this.txError;
    } catch(e){
      console.error('Storage transaction error: db may not be initialized');
      //console.log(e);
    }
  }


}
