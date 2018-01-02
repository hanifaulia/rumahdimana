import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { FIREBASE_CREDENTIALS } from './firebase.credentials';


import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ResidenceListPage } from '../pages/residence-list/residence-list';
// import { AddResidencePage } from '../pages/add-residence/add-residence';
import { ResidenceListService } from '../services/residence-list/residence-list.service';
import { toastService } from '../services/toast/toast.service';
@NgModule({
  declarations: [
    MyApp,
    // ResidenceListPage,
    // AddResidencePage,
    // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //initialise angularfire with firebase credentials moduls
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    //import the angularfiredatabasemodule to use database interaction 
    AngularFireDatabaseModule,
    AngularFireAuthModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // ResidenceListPage,
    // AddResidencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ResidenceListService,
    toastService
  ]
})
export class AppModule {}
