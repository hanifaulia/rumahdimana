import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResidenceItem } from '../../models/residence-item/residence-item.interface';
import { ResidenceListService } from '../../services/residence-list/residence-list.service';
import { ResidenceListPage } from '../residence-list/residence-list';
import { toastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditResidencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-residence',
  templateUrl: 'edit-residence.html',
})
export class EditResidencePage {

  item: ResidenceItem;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private residence: ResidenceListService,
    private toast: toastService
  ) {}

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }
  saveItem(item: ResidenceItem){
      this.residence.editItem(item).then(()=>{
        this.toast.show(`${item.residenceName} saved`);
        this.navCtrl.setRoot(ResidenceListPage);
      })
  }
  removeItem(item: ResidenceItem){
    this.residence.removeItem(item).then(() =>{
      this.toast.show(`${item.residenceName} deleted`);
      this.navCtrl.setRoot(ResidenceListPage);
    });
  }
}
