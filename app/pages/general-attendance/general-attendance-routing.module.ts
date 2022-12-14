import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralAttendancePage } from './general-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralAttendancePageRoutingModule {}
