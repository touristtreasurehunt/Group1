import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AlertRightAnswerComponent } from '../../components/alert-right-answer/alert-right-answer.component';


@Component({
  selector: "app-modal-question",
  templateUrl: "./modal-question.page.html",
  styleUrls: ["./modal-question.page.scss"]
})
export class ModalQuestionPage implements OnInit {
  @Input() question: any;
  @Input() answers: any;
  @Input() answer: any;

  rightColor = "primary";

  constructor(
    private modalCtrl: ModalController,
    private rightAnswer: AlertRightAnswerComponent
  ) {}

  ngOnInit() {
    // this.checkRightAnswer();
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  checkRightAnswer(answerValue: string) {
    // tslint:disable-next-line: forin
    // for (const property in this.data) {
    //   console.log(`${property}: ${this.data[property]}`);
    //   if (this.data[property] === this.answer.rightAnswer) {
    //     console.log(this.data[property]);
    //     // document.querySelector(`.${property}`).removeAttribute('color');
    //     // document.querySelector(`.${property}`).createAttribute('color');
    //     // document.querySelector(`.${property}`).setAttribute('color', 'yellow');
    //     console.log('el', document.querySelector(`.${property}`));
    //     this.rightColor = 'success';
    //     break;
    //   }
    // }

    console.log(answerValue);

    if (answerValue === this.answer.rightAnswer) {
      this.rightColor = "success";
      setTimeout(() => {
        this.rightAnswer.presentAlert();
      }, 800);
    } else {
      this.rightColor = "danger";
    }
  }
}
