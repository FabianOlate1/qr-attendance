import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestudentPage } from './homestudent.page';

const routes: Routes = [
  {
    path: '',
    component: HomestudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestudentPageRoutingModule {}
