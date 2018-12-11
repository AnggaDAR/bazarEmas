import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { AdminPage } from '../pages/admin/admin';
// import { AdminSecondPage } from '../pages/admin-second/admin-second';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage:any = 'LoginPage';
  // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Admin Page', component: AdminPage },
    //   { title: 'Admin Second Page', component: AdminSecondPage }
    // ];

  }

  initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide;
      });
  }

  // openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  // }
}
