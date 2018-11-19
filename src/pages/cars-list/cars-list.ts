import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cars-list',
  templateUrl: 'cars-list.html',
})
export class CarsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
