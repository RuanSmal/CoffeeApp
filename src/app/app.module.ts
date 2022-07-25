import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AccessProviders } from './providers/access-providers';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     IonicStorageModule.forRoot(),
     AppRoutingModule, 
     HttpClientModule,
    ],
  providers: [
    SplashScreen,
    StatusBar,
    AccessProviders,
    AuthGuard,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
