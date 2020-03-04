import { Component } from '@angular/core';
import { Map, tileLayer, marker, LatLng } from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: Map;
  constructor() {}

  ionViewDidEnter() {
    this.loadMapSetOfPoints();
  }

  loadMapSetOfPoints() {
    this.map = new Map("map");
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ""
    }).addTo(this.map); // This line is added to add the Tile Layer to our map
    
        // set location at the first station
        this.map.setView([57.047218, 9.920100], 13);
  }
}
