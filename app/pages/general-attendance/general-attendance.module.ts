import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralAttendancePageRoutingModule } from './general-attendance-routing.module';

import { GeneralAttendancePage } from './general-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralAttendancePageRoutingModule
  ],
  declarations: [GeneralAttendancePage]
})
export class GeneralAttendancePageModule {}
