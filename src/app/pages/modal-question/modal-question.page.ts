import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.page.html',
  styleUrls: ['./modal-question.page.scss'],
})
export class ModalQuestionPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

}
