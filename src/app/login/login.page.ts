import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from "@ionic/angular";
import { AuthenticationService } from '../services/authentication.service';
import { AccessProviders } from '../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  disabledbutton;

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

  ionViewDidEnter(){
    this.disabledbutton = false;
  }

  async login(){
    if(this.username == ''){
      this.presentToast('Username Invalid');
    }
    else if(this.password == ''){
      this.presentToast('Password Invalid');
    }
    else{
      this.disabledbutton = true;
      const loading = await this.laodingctrl.create({
        message: 'Loading...',
      });
      await loading.present();

      return new Promise(resolve => {
        let body = {
          action: 'login_progress',
          username: this.username,
          password: this.password,
        }
        this.accessproviders.postData(body,'login.php').subscribe((res: any) => {
          if(res.success == true){
            loading.dismiss();
            this.disabledbutton = false;
            this.authService.login();
            this.presentToast('Login Successfull');
            this.router.navigateByUrl('/flavours');
          }
          else{
            loading.dismiss();
            this.disabledbutton = false;
            this.presentToast('Email or Password Incorrect');
          }
         }, (err) => {
            loading.dismiss();
            this.disabledbutton = false;
            this.presentAlertConfirm('Timeout');
         })
      });
    }
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
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel: Closed');
          }
        }, {
          text:'Try Again',
          handler: () => {
            this.login();
          }
        }
      ]
    })
      await alert.present();
    }
  }

