import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-app',
  templateUrl: './info-app.page.html',
  styleUrls: ['./info-app.page.scss']
})
export class InfoAppPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async close() {
    await this.modalCtrl.dismiss();
  }
}
