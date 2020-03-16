import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as dataMarkers from './markers-data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storage: Storage) {}

  getAllData() {
    return dataMarkers.markers;
  }

  getPlace(id: string) {
    return dataMarkers.markers.find(item => id === item.id);
  }
}
