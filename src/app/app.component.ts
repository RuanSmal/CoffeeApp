
import { NavController, Platform } from '@ionic/angular';
import { Component } from '@angular/core';
//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Storage } from '@ionic/storage-angular';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router:Router,
    public navctrl: NavController,
    private storage: Storage,
    public authenticationService: AuthenticationService
    ) 
    {
    this.initializeApp()
    }
  
  async initializeApp(){
    await this.storage.create();
    this.platform.ready().then(() =>{
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
    this.authenticationService.authState.subscribe(state => {
      if (state) {
        this.router.navigate(['flavours']);
      } else {
        this.router.navigate(['login']);
      }
    })
  }
}
