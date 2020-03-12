import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.page.html',
  styleUrls: ['./modal-question.page.scss'],
})
export class ModalQuestionPage implements OnInit {
  @Input() data: any;
  @Input() answer: any;

  rightColor = 'primary';

  constructor(private modalCtrl: ModalController) { }

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
    console.log('hola :)');

    if (answerValue === this.answer.rightAnswer) {
      this.rightColor = 'success';
      // alert('Win');
    } else {
      this.rightColor = 'danger';
    }
  }

}
