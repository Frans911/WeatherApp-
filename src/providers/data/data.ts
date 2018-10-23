import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getData(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5df5f7a5c8c1ea1b51cca9250f8f8294')
  }
}
