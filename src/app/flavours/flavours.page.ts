import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from "@ionic/angular"
import { AccessProviders } from '../providers/access-providers';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.page.html',
  styleUrls: ['./flavours.page.scss'],
})
export class FlavoursPage implements OnInit {

  constructor(
    private router: Router,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private laodingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private navctrl: NavController,
    private storage: Storage,
    private authService: AuthenticationService

  ) { }

  ngOnInit() {
  }

  reload(){
    this.presentAlertConfirm('Sync Completed!');
  }

  relocate(){
    this.router.navigateByUrl('/manage-flavours');
  }

  logoutUser(){
    this.authService.logout();
  }

  async presentToast(a){
    const toast = await this.toastctrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }
  async presentAlertConfirm(a){
    const alert = await this.alertctrl.create({
      header: a,
      backdropDismiss: false,
      buttons:[
        {
          text: 'Okay',
          handler: (blah) => {
            console.log('Confirm Cancel: Closed');
            window.location.reload();
          }
        }, 
      ]
    })
      await alert.present();
    }
}


