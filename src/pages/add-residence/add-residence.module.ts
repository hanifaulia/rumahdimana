import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddResidencePage } from './add-residence';

@NgModule({
  declarations: [
    AddResidencePage,
  ],
  imports: [
    IonicPageModule.forChild(AddResidencePage),
  ],
})
export class AddResidencePageModule {}
