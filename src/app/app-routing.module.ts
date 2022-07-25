import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'flavours',
    loadChildren: () => import('./flavours/flavours.module').then( m => m.FlavoursPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-flavours',
    loadChildren: () => import('./manage-flavours/manage-flavours.module').then( m => m.ManageFlavoursPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
