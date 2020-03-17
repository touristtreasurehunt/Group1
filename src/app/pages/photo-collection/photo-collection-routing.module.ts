import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoCollectionPage } from './photo-collection.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoCollectionPageRoutingModule {}
