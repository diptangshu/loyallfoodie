import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ icon: string, title: string, component: any }>;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private auth: AuthProvider
  ) {

    this.initializeApp();
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'shirt', title: 'Merchandise', component: HomePage },
      { icon: 'book', title: 'History', component: HomePage },
      { icon: 'key', title: 'Account', component: HomePage }
    ];
  }
  
  initializeApp() {
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.auth.afAuth.authState.subscribe(
      user => {
        this.rootPage = user? HomePage : LoginPage;
      },
      () => this.rootPage = LoginPage
    );
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  login() {
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  logout() {
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }
}

