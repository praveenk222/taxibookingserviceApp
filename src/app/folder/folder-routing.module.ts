import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ConfirmpickupComponent } from './confirmpickup/confirmpickup.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmpickupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
