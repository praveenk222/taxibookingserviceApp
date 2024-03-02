import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ChooserideComponent } from './chooseride/chooseride.component';
import { HomeComponent } from './home/home.component';
import { FindyourrideComponent } from '../findyourride/findyourride.component';
import { ContinuerideComponent } from '../continueride/continueride.component';
import { WheretoComponent } from './whereto/whereto.component';
import { ConfirmpickupComponent } from './confirmpickup/confirmpickup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {  
    path:'continueride',
    component:ContinuerideComponent
  },
  {  
    path:'location',
    component:WheretoComponent
  },
  {  
    path:'confirmpickup',
    component:ConfirmpickupComponent
  },
  {  
    path:'chooseride',
    component:ChooserideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderPageRoutingModule {}
