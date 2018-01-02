import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddResidencePage } from '../add-residence/add-residence'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ResidenceItem } from '../../models/residence-item/residence-item.interface';
import { ResidenceListService } from '../../services/residence-list/residence-list.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ResidenceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residence-list',
  templateUrl: 'residence-list.html',
})
export class ResidenceListPage {

  residenceList$: Observable<ResidenceItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private residence: ResidenceListService) {
    
    //pointing to databse
    
    this.residenceList$ = this.residence
    .getResidenceList() //db list
    .snapshotChanges() // key and value 
    .map(
      changes=>{ return changes.map(c=>({
        key: c.payload.key,...c.payload.val()
        }))
      }
    )
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidenceListPage');
  }
  navigateToAddResidencePage(){
    //navigate the user to the addresidancepage
    this.navCtrl.push('AddResidencePage');
  }
}
