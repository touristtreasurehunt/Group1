import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'alert-right-answer',
  templateUrl: './alert-right-answer.component.html',
  styleUrls: ['./alert-right-answer.component.scss']
})
export class AlertRightAnswerComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private storage: Storage
  ) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Correct Answer',
      subHeader: 'Congratulations! 👏',
      message: 'Go to Photo Collection',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('go to photo collection page');
            this.storage.set('img', [
              '../../../assets/img/laspalmasGC.jpg',
              // '../../../assets/img/catedral-santa-ana.jpg'
            ]);
            this.modalCtrl.dismiss();
            this.navCtrl.navigateForward('/photo-collection');
          }
        }
      ]
    });

    await alert.present();
  }
}
