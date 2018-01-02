import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidenceListPage } from './residence-list';

@NgModule({
  declarations: [ResidenceListPage],
  imports: [
    IonicPageModule.forChild(ResidenceListPage),
  ],
})
export class ResidenceListPageModule {}
