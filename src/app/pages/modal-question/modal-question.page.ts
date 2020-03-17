import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { AlertRightAnswerComponent } from '../../components/alert-right-answer/alert-right-answer.component';


@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.page.html',
  styleUrls: ['./modal-question.page.scss']
})
export class ModalQuestionPage implements OnInit {
  @Input() question: any;
  @Input() answers: any;
  @Input() answer: any;
  @Input() img: any;
  @Input() id: any;

  imgUrl: string;
  rightColor = 'primary';
  idList: any = [];

  constructor(
    private modalCtrl: ModalController,
    private rightAnswer: AlertRightAnswerComponent,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.imgUrl = `../../../assets/img/${this.img.url}`;
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  async checkRightAnswer(answerValue: string) {
    if (answerValue === this.answer.rightAnswer) {
      this.rightColor = 'success';
      this.idList = await this.storage.get('ids') || [];
      if (!this.idList.includes(this.id)) {
        this.idList.push(this.id);
        this.storage.set('ids', this.idList);
      }
      setTimeout(() => {
        this.rightAnswer.presentAlert();
      }, 800);
    } else {
      this.rightColor = 'danger';
    }
  }
}
