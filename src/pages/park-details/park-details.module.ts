import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkDetailsPage } from './park-details';

@NgModule({
  declarations: [
    ParkDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkDetailsPage),
  ],
})
export class ParkDetailsPageModule {}
