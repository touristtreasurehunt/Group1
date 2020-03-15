import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.page.html',
  styleUrls: ['./photo-collection.page.scss']
})
export class PhotoCollectionPage implements OnInit {
  imgLink: any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private storage: Storage,
  ) {}

  ngOnInit() {
    this.getDataFromStorage();
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
    // this.router.navigateByUrl('/home');
  }

  getDataFromStorage() {
    this.storage.get('img').then(imgList => {
      console.log('imgList', imgList);
      this.imgLink = imgList;
      // this.imgLink = `../../../assets/img/${imgList[0]}`;
    });
  }
}
