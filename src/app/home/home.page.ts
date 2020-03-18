import { Component } from '@angular/core';
import * as L from 'leaflet';

import { ModalController, NavController } from '@ionic/angular';
import { ModalQuestionPage } from '../pages/modal-question/modal-question.page';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  map: any;
  distanceMap: any;
  userPosition: any;
  markerPlaceToGo: any;

  imgLink: any;
  markerId = '1';
  markerName: string;

  position: any;

  //Img variables.............................................................

  layers: any;
  imgContainer: any;
  randomNumber: number = Math.floor(Math.random() * 4) + 1;
  randomNumberList: Array<number> = [];
  // This distance will be replaced by the data of the map
  distance: any; // getRouteDistance() ?
  distance1: number;
  distance2: number;
  distance3: number;
  distance4: number;

  // Uncomment to work in real-time
  // currentDistance: any; // getRouteDistance() ?

  // currentDistance set to 0 to make the SIMULATION
  currentDistance = 0;

  distanceRanges: object = {
    range1: { isInTheRange: false },
    range2: { isInTheRange: false },
    range3: { isInTheRange: false },
    range4: { isInTheRange: false }
  };

  firtDistance: object = {
    distance: { isDistance: false }
  };

  keepUpdated: any;

  showBtn = false;
  showText = false;
  startInterval = false;

  ids: string;

  //..............................................................................

  constructor(
    public modalController: ModalController,
    private data: DataService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.imgLink = `../../../assets/img/${
      this.data.getPlace(this.markerId).img.url
    }`;
  }

  async ionViewDidEnter() {
    console.log('dataService getPlace', this.data.getPlace(this.markerId));
    this.markerName = this.data.getPlace(this.markerId).name;

    console.log('this.position', this.position);

    if (this.map) {
      console.log('borrar mapa');
      this.map.remove();
    }

    this.map = L.map('map').setView([43.2603479, -2.933411], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );

    this.markerPlaceToGo = L.marker([28.130006, -15.448792], {
      draggable: false
    }).addTo(this.map);

    // Create markers
    this.setMarkers('1');
    this.setMarkers('2');
    this.setMarkers('3');
    this.setMarkers('4');

    this.map
      .locate({ setView: true, watch: true })
      .on('locationfound', (e: any) => {
        // Consultamos si existe y si ya existe le cambiamos la posición
        if (this.position != undefined) {
          this.position.setLatLng([e.latitude, e.longitude]);
          this.map.setView([e.latitude, e.longitude], 30); // Calculamos la distancia entre la posición actual y el marcador
          this.distanceMap = Math.round(
            this.map.distance(
              [e.latitude, e.longitude],
              this.markerPlaceToGo.getLatLng()
            )
          );
          // Colocamos la distancia dentro de un Popup
          this.position
            .bindPopup('Estás a ' + this.distanceMap + ' metros del objetivo.')
            .openPopup();
        } else {
          this.position = L.circle([e.latitude, e.longitude], {
            radius: 5
          }).addTo(this.map);
          this.map.setView([e.latitude, e.longitude], 30);
        }
      });

    //setInterval(() =>{ this.prueba(); }, 3000);

    //setInterval Img.............................................................

    this.layers = document.querySelectorAll('.layer');
    this.imgContainer = document.querySelector('.image-container');

    // Check if the place has already visited
    this.ids = await this.storage.get('ids') || [];
    if (!this.ids.includes(this.markerId)) {
      this.createInterval();
    }
    this.checkDefaultPlace();

    //..................................................................................
  }

  ionViewDidLeave() {
    // To get again user position circle
    this.position = undefined;

    this.checkDefaultPlace();
    clearInterval(this.keepUpdated);
  }

  //Function img.............................................................

  // Add an animation to a layer and remove that layer
  removeLayer(indexLayer: number) {
    this.layers[indexLayer].classList.add('animation-layer');
    // setTimeout(() => this.layers[indexLayer].remove(), 1000);
  }

  // Show an aleatory part of the image depending on a random number
  displayLayers() {
    switch (this.randomNumber) {
      case 1:
        this.removeLayer(0);
        break;
      case 2:
        this.removeLayer(1);
        break;
      case 3:
        this.removeLayer(2);
        break;
      case 4:
        this.removeLayer(3);
        break;
      default:
        console.log('Error layers');
    }
  }

  // Check if the random number is not repeated and show the layers
  displayRandomLayer() {
    while (this.randomNumberList.includes(this.randomNumber)) {
      this.randomNumber = Math.floor(Math.random() * 4) + 1;
    }
    this.displayLayers();
    this.randomNumberList.push(this.randomNumber);
  }

  removeImage() {
    setTimeout(() => this.imgContainer.classList.add('animation-layer'), 1500);
    setTimeout(() => (this.imgContainer.style.display = 'none'), 2500);
    // setTimeout(() => this.imgContainer.remove(), 2500);
  }

  // Check if in every distance range the function only runs once
  checkDisplayLayer(range: string) {
    if (!this.distanceRanges[range].isInTheRange) {
      switch (range) {
        case 'range1':
          if (this.currentDistance >= this.distance3) {
            console.log('1');
            this.displayRandomLayer();
            this.distanceRanges[range].isInTheRange = true;
          }
          break;
        case 'range2':
          if (
            this.currentDistance < this.distance3 &&
            this.currentDistance >= this.distance2
          ) {
            console.log('2');
            this.displayRandomLayer();
            this.distanceRanges[range].isInTheRange = true;
          }
          break;
        case 'range3':
          if (
            this.currentDistance < this.distance2 &&
            this.currentDistance >= this.distance1
          ) {
            console.log('3');
            this.displayRandomLayer();
            this.distanceRanges[range].isInTheRange = true;
          }
          break;
        case 'range4':
          console.log(
            '********** this.currentDistance < this.distance1',
            this.currentDistance < this.distance1
          );
          console.log('********** this.distance1', this.distance1);
          if (this.currentDistance < this.distance1) {
            console.log('4');
            this.displayRandomLayer();
            this.distanceRanges[range].isInTheRange = true;
          }
      }
    }
  }

  allChecks() {
    // Uncomment this line to make it work in real-time
    // this.currentDistance = this.distanceMap;
    console.log('this.currentDistance', this.currentDistance);

    // SIMULATION
    this.currentDistance = this.currentDistance + (this.distance1 - 1000);

    this.checkDisplayLayer('range1');
    this.checkDisplayLayer('range2');
    this.checkDisplayLayer('range3');
    this.checkDisplayLayer('range4');
    console.log('currentDistance SIMULATION', this.currentDistance);
  }

  createInterval() {
    if (this.startInterval || !this.showText) {
      // Add a setInterval to update and check the distances ranges
      this.keepUpdated = setInterval(() => {
        if (this.randomNumberList.length === this.layers.length) {
          setTimeout(() => (this.showBtn = true), 3000);
          this.removeImage();
          clearInterval(this.keepUpdated);
        }

        if (
          !this.firtDistance['distance'].isDistance &&
          this.distanceMap != undefined
        ) {
          this.distance = this.distanceMap;
          this.distance1 = this.distance / 4;
          this.distance2 = this.distance1 * 2;
          this.distance3 = this.distance1 * 3;
          this.distance4 = this.distance;
          this.firtDistance['distance'].isDistance = true;
        }
        this.allChecks();
      }, 3000);
    }
  }

  getInfoPlace(id: string) {
    // Reset some variables
    this.startInterval = true;
    this.markerId = id;
    clearInterval(this.keepUpdated);
    this.imgContainer.style.display = 'block';
    this.setOpacityToLayers();
    this.currentDistance = 0;
    this.randomNumberList = [];
    this.showText = false;

    // Appears again the image
    this.imgContainer.classList.remove('animation-layer');

    // Set distances ranges to false
    // tslint:disable-next-line: forin
    for (const key in this.distanceRanges) {
      this.distanceRanges[key].isInTheRange = false;
    }

    this.imgLink = `../../../assets/img/${
      this.data.getPlace(this.markerId).img.url
    }`;

    this.createInterval();
  }

  setOpacityToLayers() {
    this.layers[0].classList.remove('animation-layer');
    this.layers[1].classList.remove('animation-layer');
    this.layers[2].classList.remove('animation-layer');
    this.layers[3].classList.remove('animation-layer');
  }

  async checkGetInfoPlace(id: string) {
    this.ids = await this.storage.get('ids') || [];
    this.markerName = this.data.getPlace(id).name;

    if (this.ids.includes(id)) {
      clearInterval(this.keepUpdated);
      this.imgContainer.style.display = 'none';
      this.showText = true;
      this.showBtn = false;
    } else {
      this.getInfoPlace(id);
    }
  }

  async checkDefaultPlace() {
    this.ids = (await this.storage.get('ids')) || [];
    if (this.ids.includes(this.markerId)) {
      this.imgContainer.style.display = 'none';
      this.showText = true;
      this.showBtn = false;
    }
  }
  
  setMarkers(id: string) {
    L.marker([this.data.getPlace(id).geolocation.lat, this.data.getPlace(id).geolocation.lng], {
      draggable: false
    })
      .bindPopup(this.data.getPlace(id).name)
      .addTo(this.map)
      .on('click', () => {
        this.checkGetInfoPlace(id);
      });
  }

  //.............................................................................

  //QUESTION.............................................................

  async showModal() {
    let aMarker = this.data.getPlace(this.markerId);
    const modal = await this.modalController.create({
      component: ModalQuestionPage,
      componentProps: {
        question: {
          q: aMarker.question
        },
        answers: {
          answer1: aMarker.options.anotherBadOption,
          answer2: aMarker.options.badOption,
          answer3: aMarker.options.correct
        },
        answer: {
          rightAnswer: aMarker.options.correct
        },
        img: {
          url: aMarker.img.url
        },
        id: this.markerId
      }
    });
    clearInterval(this.keepUpdated);
    return await modal.present();
  }

  goToPhotoCollection() {
    this.navCtrl.navigateForward('/photo-collection');
  }
}
