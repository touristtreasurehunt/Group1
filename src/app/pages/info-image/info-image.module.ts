import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoImagePageRoutingModule } from './info-image-routing.module';

import { InfoImagePage } from './info-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoImagePageRoutingModule
  ],
  declarations: [InfoImagePage]
})
export class InfoImagePageModule {}
