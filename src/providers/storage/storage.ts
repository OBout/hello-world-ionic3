import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  private numberFromHome: number = 99

  constructor(public http: HttpClient) {
    console.log('Hello StorageProvider Provider')
  }

  public get getNumberFromHome() {
    return this.numberFromHome
  }

  public set getNumberFromHome(arg: number) {
    this.numberFromHome = arg
  }

}
