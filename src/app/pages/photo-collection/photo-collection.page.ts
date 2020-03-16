import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { InfoImagePage } from '../info-image/info-image.page';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.page.html',
  styleUrls: ['./photo-collection.page.scss']
})
export class PhotoCollectionPage implements OnInit {
  // imgLink: any;
  placeInfo: any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private storage: Storage,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getDataFromStorage();
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
    // this.router.navigateByUrl('/home');
  }

  getDataFromStorage() {
    this.storage.get('img').then(data => {
      console.log('data', data);
      this.placeInfo = data;
      // this.imgLink = imgList;
      // this.imgLink = `../../../assets/img/${imgList[0]}`;
    });
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: InfoImagePage,
      // componentProps: {
      //   data: {
      //     answer1: "answer1",
      //     answer2: "answer2",
      //     answer3: "answer3"
      //   },
      //   answer: {
      //     rightAnswer: "answer3"
      //   }
      // }
    });
    return await modal.present();
  }

  showInfo(id) {

  }
}
