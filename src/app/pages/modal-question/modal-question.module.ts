import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalQuestionPageRoutingModule } from './modal-question-routing.module';

import { ModalQuestionPage } from './modal-question.page';

// import { AlertRightAnswerComponent } from '../../components/alert-right-answer/alert-right-answer.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalQuestionPageRoutingModule
  ],
  entryComponents: [],
  declarations: [ModalQuestionPage],
  providers: [ComponentsModule]
})
export class ModalQuestionPageModule {}
