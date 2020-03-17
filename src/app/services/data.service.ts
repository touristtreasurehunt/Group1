import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as dataMarkers from './markers-data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  placesList: any;

  constructor(private storage: Storage) {}

  getAllData() {
    return dataMarkers.markers;
  }

  getPlace(id: string) {
    return dataMarkers.markers.find(marker => id === marker.id);
  }

  getPlacesWithId(ids: any) {
    console.log('IDS --service', ids);
    this.placesList = [];
    ids.forEach((id: string) => {
      this.placesList.push(this.getPlace(id));
    });
    console.log(this.placesList);
    return this.placesList;
  }
}
