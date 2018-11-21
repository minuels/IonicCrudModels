import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from "../../moduls/user/Person";
import { User } from "../../moduls/user/User";
import { AngularFireAuth } from "angularfire2/auth";
import { async } from 'rxjs/internal/scheduler/async';
import { ToastController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  /*
  person: Person = {
    firstName: '',
    lastName: '',
    email: ''
  } 

  user: User = {
    email: '',
    password: ''
  }
  */
  user = {} as User; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
  }

  async btnRegisterPersonUser() {
    try {
      const result = await 
      this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      this.toast.create({
        message: "Account succesfully created",
        duration: 3000
        }).present();
        console.log(result);
      }
    catch(e){
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }
}
