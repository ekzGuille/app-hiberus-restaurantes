import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytabsPage } from './mytabs';

@NgModule({
  declarations: [
    MytabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MytabsPage),
  ]
})
export class MytabsPageModule {}
