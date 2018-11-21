import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer } from 'ionic-angular';
//import { CarsListPage } from '../cars-list/cars-list';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../moduls/user/User";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
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
  async login() {
    try{
      const result = await 
      this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }
}
