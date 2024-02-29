import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ContinuerideComponent } from '../continueride/continueride.component';
import { FindyourrideComponent } from './findyourride/findyourride.component';

const routes: Routes = [
  {
    path: '',
    component: ContinuerideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
