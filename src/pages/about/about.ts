import { Component } from '@angular/core';
import { StorageProvider } from '../../providers/storage/storage'
import { NavController, Tabs } from 'ionic-angular'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tab: Tabs

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider
  ) {
    this.tab = this.navCtrl.parent;
  }

  public get fromHome() {
    return this.storage.getNumberFromHome
  }

  toHome() {
    this.tab.select(0);
  }

}
