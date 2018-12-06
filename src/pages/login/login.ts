import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {
    name: 'admin',
    pw: 'admin'
  };

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private alertCtrl: AlertController) { }

  loginUser(){
    this.authProvider.login(this.user.name, this.user.pw).then(success => {
      if(success){
        this.navCtrl.setRoot('MenuPage');
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          message: 'Please check your credentials',
          buttons: ['Ok']
        });
        alert.present;
      }
    });
  }
}
