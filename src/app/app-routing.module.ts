import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'folder',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./battery-reservation/battery-reservation.module').then( m => m.BatteryReservationPageModule)
  },
  {
    path: 'washing',
    loadChildren: () => import('./washing/washing.module').then( m => m.WashingPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
