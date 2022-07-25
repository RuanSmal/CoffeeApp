import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageFlavoursPage } from './manage-flavours.page';

const routes: Routes = [
  {
    path: '',
    component: ManageFlavoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageFlavoursPageRoutingModule {}
