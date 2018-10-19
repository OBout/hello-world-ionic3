import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private clickValue: number = 0;

  constructor(
    public navCtrl: NavController,
    private storage: StorageProvider) {

  }

  public clickButton() {
    console.log('clicked')
    this.clickValue++
    this.storage.getNumberFromHome = this.clickValue
  }

  public get showButton() {
    return this.clickValue
  }

}
