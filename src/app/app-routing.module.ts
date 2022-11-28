import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'passrecovery',
    loadChildren: () => import('./pages/passrecovery/passrecovery.module').then( m => m.PassrecoveryPageModule)
  },
  {
    path: 'homestudent',
    loadChildren: () => import('./pages/homestudent/homestudent.module').then( m => m.HomestudentPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'general-attendance',
    loadChildren: () => import('./pages/general-attendance/general-attendance.module').then( m => m.GeneralAttendancePageModule)
  },
  {
    path: 'scanqr',
    loadChildren: () => import('./pages/scanqr/scanqr.module').then( m => m.ScanqrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
