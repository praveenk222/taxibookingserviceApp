import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ChooserideComponent } from './chooseride/chooseride.component';
import { HomeComponent } from './home/home.component';
import { FindyourrideComponent } from '../findyourride/findyourride.component';
import { ContinuerideComponent } from '../continueride/continueride.component';
import { RidedetailsComponent } from '../ridedetails/ridedetails.component';
import { WheretoComponent } from './whereto/whereto.component';
import { ConfirmpickupComponent } from './confirmpickup/confirmpickup.component';
import { DestinationComponent } from './destination/destination.component';
import { SearchComponent } from './search/search.component';
import { CoridesComponent } from './corides/corides.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  ],
  declarations: [FolderPage,ChooserideComponent,HomeComponent,  FindyourrideComponent,
    ContinuerideComponent,
    WheretoComponent,
    ConfirmpickupComponent,
    DestinationComponent,
    RidedetailsComponent,
    SearchComponent,
    CoridesComponent

  ],


  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPageModule {}
