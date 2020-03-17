import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { InfoImagePage } from '../info-image/info-image.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.page.html',
  styleUrls: ['./photo-collection.page.scss']
})
export class PhotoCollectionPage {
  placeInfo: any;
  ids: any;
  imgPartialUrl = '../../../assets/img/';

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    public modalController: ModalController,
    private data: DataService
  ) {}

  ionViewDidEnter() {
    this.getDataFromStorage();
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

  async getDataFromStorage() {
    this.ids = await this.storage.get('ids');
    this.placeInfo = this.data.getPlacesWithId(this.ids);
  }

  async showModal(id) {
    const modal = await this.modalController.create({
      component: InfoImagePage,
      componentProps: {
        place: {
          name: this.data.getPlace(id).name,
          img: this.data.getPlace(id).img.url,
          info: this.data.getPlace(id).information
        },
      }
    });
    return await modal.present();
  }
}
