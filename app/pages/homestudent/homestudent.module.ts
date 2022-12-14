import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomestudentPageRoutingModule } from './homestudent-routing.module';

import { HomestudentPage } from './homestudent.page';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomestudentPageRoutingModule,
    IonicStorageModule
  ],
  declarations: [HomestudentPage]
})
export class HomestudentPageModule {}
