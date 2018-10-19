import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private clickValue: number = 0;

  public twoWayValue: number = 0;

  constructor(public navCtrl: NavController) {

  }

  public clickButton() {
    console.log('clicked')
    this.clickValue++
    this.twoWayValue++
  }

  public get showButton() {
    return this.clickValue
  }

}

