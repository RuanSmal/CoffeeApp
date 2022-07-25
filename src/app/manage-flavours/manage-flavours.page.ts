import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from "@ionic/angular"
import { AccessProviders } from '../providers/access-providers';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-manage-flavours',
  templateUrl: './manage-flavours.page.html',
  styleUrls: ['./manage-flavours.page.scss'],
})
export class ManageFlavoursPage implements OnInit {

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

  logoutUser(){
    this.authService.logout();
  }
  
  relocate(){
    this.router.navigateByUrl('/flavours');
  }

  
}
