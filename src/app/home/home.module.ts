import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ModalQuestionPage } from '../pages/modal-question/modal-question.page';
import { ModalQuestionPageModule } from '../pages/modal-question/modal-question.module';
import { from } from 'rxjs';

@NgModule({
  entryComponents: [
    // ModalQuestionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ModalQuestionPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
