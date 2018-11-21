import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer, ToastController } from 'ionic-angular';
//import { CarsListPage } from '../cars-list/cars-list';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../moduls/user/User";
import { LoginResponse } from "../../moduls/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
      this.loginStatus = new EventEmitter<any>();
  }

  navigateToPage(pageName: string) {
    this.navCtrl.push(pageName);
  }
  async login() {
    try{
      //const result: LoginResponse = {
        //result: await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
        //this.loginStatus.emit(result);
    } 
    catch(e){
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
      console.error(e);
    }
  }
  //Este metodo tiene error no estoy captando la informacion de la interfaz
  //LoginResponse
  loginResponse(event: LoginResponse){
    if (!event.error) {
      this.toast.create({
        message: 'Welcome',
        duration: 5000
      }).present();
      this.navCtrl.setRoot('TabsPage');
    }
    else{
      this.toast.create({
        message: event.error.messege,
        duration: 5000
      }).present();
    }
  }
}
