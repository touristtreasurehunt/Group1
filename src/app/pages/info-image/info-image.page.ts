import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.page.html',
  styleUrls: ['./info-image.page.scss']
})
export class InfoImagePage implements OnInit {
  imgLink: any;

  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    // this.getDataFromStorage();
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  getDataFromStorage() {
    this.storage.get('img').then(imgList => {
      console.log('imgList', imgList);
      // this.imgLink = imgList;
      this.imgLink = imgList[0];
    });
  }
}
