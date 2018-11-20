import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from "../../moduls/user/Person";
import { User } from "../../moduls/user/User";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  person: Person = {
    firstName: '',
    lastName: '',
    email: ''
  } 

  user: User = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  btnRegisterPersonUser(){

  }
}
