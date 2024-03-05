import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
import { ConfirmpickupComponent } from './confirmpickup/confirmpickup.component';
import { SearchComponent } from './search/search.component';
import { WheretoComponent } from './whereto/whereto.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ConfirmpickupComponent
  // },
  // {
  //   path: '',
  //   component: SearchComponent
  // },
 
    {
    path: '',
    component: WheretoComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
