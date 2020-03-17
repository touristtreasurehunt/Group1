import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoCollectionPageRoutingModule } from './photo-collection-routing.module';

import { PhotoCollectionPage } from './photo-collection.page';

// import { InfoImagePage } from '../info-image/info-image.page';

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoCollectionPageRoutingModule
  ],
  declarations: [PhotoCollectionPage]
})
export class PhotoCollectionPageModule {}
