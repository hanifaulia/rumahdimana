import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ResidenceItem } from '../../models/residence-item/residence-item.interface';
import { ResidenceListService } from '../../services/residence-list/residence-list.service';
import { ResidenceListPage } from '../residence-list/residence-list';
import { toastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddResidencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-residence',
  templateUrl: 'add-residence.html',
})
export class AddResidencePage {

  item: ResidenceItem={
      residenceName:'',
      residenceAdress:'',
      residenceUnit:undefined

  } 

 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private residence:ResidenceListService,
    private toast:toastService
  ) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddResidencePage');
  }
  addItem(item: ResidenceItem){
      this.residence.addItem(item).then(ref=>{
        this.toast.show(`${item.residenceName} Added`);
        this.navCtrl.setRoot(ResidenceListPage,{key:ref.key})
      });
  }
 }
