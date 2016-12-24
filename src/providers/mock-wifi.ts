export class MOCK_WIZARD {
  savedNetworks: any = [
    '"Mr. Nice"',
    '"Narco"',
    '"Bombasto"',
    '"Celeritas"',
    '"Magneta"',
    '"RubberMan"',
    '"Dynama"',
    '"Dr IQ"',
    '"Magma"',
    '"Tornado"',
  ];

  scannedNetworks: any = [
    {   level: -52,
        SSID: "Kyle",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Mr. Nice",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Narco",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Bombasto",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Celeritas",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Magneta",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "RubberMan",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Dynama",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Dr IQ",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    },
    {   level: -52,
        SSID: "Magma",
        BSSID: "00:de:ad:be:ef:ff",
        frequency: 2462,
        capabilities: "[WPA2-PSK-CCMP][ESS]"
    }
  ];

  scanning: boolean = false;
  wifiIsEnabled: boolean = false;
  currentSSID: string = "MockNetworkSSID";
  currentBSSID: string = "00:de:ad:be:ef:ff";


  formatWifiConfig(SSID, password, algorithm){}
  formatWPAConfig(SSID, password){}
  addNetwork(wifi, win, fail){}
  removeNetwork(SSID, win, fail){}
  connectNetwork(SSID, win, fail){}
  disconnectNetwork(SSID, win, fail){}

  listNetworks(win, fail){
    return win(this.savedNetworks);
  }

  startScan(success, fail){
    this.scanning = true;
    return success();
  }
  getScanResults(options, listHandler, fail){
    return listHandler(this.scannedNetworks);
  }
  getCurrentSSID(ssidHandler, fail){
    return ssidHandler(this.currentSSID);
  }

  getCurrentBSSID(win, fail){
    return win(this.currentBSSID);
  }

  isWifiEnabled(win, fail){
    return win(this.wifiIsEnabled);
  }

  setWifiEnabled(enabled, win, fail){
    this.wifiIsEnabled = enabled;
    return win(this.wifiIsEnabled);
  }

}
