import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth } from 'angularfire2/auth';
import { toastService } from '../../services/toast/toast.service';
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

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private afAuth: AngularFireAuth
    , private toast:toastService) {
  }

  ionViewDidLoad() {
    
    this.afAuth.authState.subscribe(data =>{
      if(data.email && data.uid){
        this.toast.show(`welcome to %APP_NAME% ${data.email}`);
          }else{
            this.toast.show(`couldn't found authentication detail`);
          }
      }
      );
    ;
  }

}
