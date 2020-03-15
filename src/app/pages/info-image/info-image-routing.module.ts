import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoImagePage } from './info-image.page';

const routes: Routes = [
  {
    path: '',
    component: InfoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoImagePageRoutingModule {}
