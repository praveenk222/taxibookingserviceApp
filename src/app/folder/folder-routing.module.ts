import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
import { ChooserideComponent } from './chooseride/chooseride.component';
import { HomeComponent } from './home/home.component';
import { FindyourrideComponent } from '../findyourride/findyourride.component';
import { ContinuerideComponent } from '../continueride/continueride.component';
import { WheretoComponent } from './whereto/whereto.component';
import { ConfirmpickupComponent } from './confirmpickup/confirmpickup.component';
import { DestinationComponent } from './destination/destination.component';
import { RidedetailsComponent } from '../ridedetails/ridedetails.component';
import { SolorideComponent } from '../soloride/soloride.component';

const routes: Routes = [
  {
    path: 'home',
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
    path:'',
    component:ChooserideComponent
  },
  {  
    path:'destination',
    component:DestinationComponent
  },
  {
    path:'ridedetails',
    component:RidedetailsComponent
  },
  {
    path:'soloride',
    component:SolorideComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderPageRoutingModule {}
