import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.page.html',
  styleUrls: ['./info-image.page.scss']
})
export class InfoImagePage implements OnInit {
  imgLink: any;
  imgPartialUrl = '../../../assets/img/';
  @Input() place: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async close() {
    await this.modalCtrl.dismiss();
  }
}
