import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storage: Storage) {}

  getAllData() {
    return [
      {
        id: 1,
        img: 'laspalmasGC.jpg'
      },
      {
        id: 2,
        img: 'catedral-santa-ana.jpg'
      }
    ];
  }
}
