import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

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

  imgUrl: string;
  rightColor = 'primary';

  constructor(
    private modalCtrl: ModalController,
    private rightAnswer: AlertRightAnswerComponent
  ) {}

  ngOnInit() {
    this.imgUrl = `../../../assets/img/${this.img.url}`;
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  checkRightAnswer(answerValue: string) {
    console.log(answerValue);

    if (answerValue === this.answer.rightAnswer) {
      this.rightColor = 'success';
      setTimeout(() => {
        this.rightAnswer.presentAlert();
      }, 800);
    } else {
      this.rightColor = 'danger';
    }
  }
}
