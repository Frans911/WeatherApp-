import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeV2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-v2',
  templateUrl: 'home-v2.html',
})
export class HomeV2Page {
  myInput;
  City:string;
  Info;
  display:number;
  icon:string;
  temp:number;
  date:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider) {
    this.display = 0;
    this.date = new Date().toISOString();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeV2Page');
    this.data.getData("Pretoria").subscribe( results =>{
      this.Info = results;
      this.display = 1;
      this.temp = 0;
      })
  }
  onInput(){ 
    this.City = this.myInput;
  }
  getForecast(){
    this.data.getData(this.myInput).subscribe( results =>{
    this.Info = results;
    this.display = 1;
    this.temp = 0;
    })
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getForecast();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  lowTemp(){
   this.temp = 2;
  }
 highTemp(){
  this.temp = 1;
 }
  onCancel(){

  }
}
