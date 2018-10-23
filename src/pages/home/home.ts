import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  City:string;
  Info:any;
  display:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider) {
    this.display = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  getForecast(){
    this.data.getData(this.City).subscribe( results =>{
    this.Info = results;
    this.display = 1;
    })
  }
  reset(){
    this.display = 0;
    this.City = '';
  }
}
