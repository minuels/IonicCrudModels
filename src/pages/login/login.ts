import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarsListPage } from '../cars-list/cars-list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPage(pageName: string) {
    this.navCtrl.push(pageName);
    /*
    if (pageName === 'CarsListPage') {
      this.navCtrl.push(CarsListPage);
    }
    else {
      this.navCtrl.push(pageName);
    }
    */
  }

}
