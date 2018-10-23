import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeV2Page } from './home-v2';

@NgModule({
  declarations: [
    HomeV2Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeV2Page),
  ],
})
export class HomeV2PageModule {}
