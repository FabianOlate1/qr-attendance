import { Storage } from '@ionic/storage-angular';
import { Injectable, OnInit } from '@angular/core';

const STORAGE_KEY = 'milista'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { 

  }

  async init() {
    console.log('INIT');
    this.storage.create();
    console.log('lito');
  }

  getdata(){
    console.log('obteniendo data')
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData (item){
   const storedData = await this.storage.get (STORAGE_KEY) || [];
   storedData.push(item);
   return this.storage.set (STORAGE_KEY, storedData);
  }

  async remvoveItem(index) {
    const storedData = await this.storage.get (STORAGE_KEY) || [];
    storedData.splice (index, 1);
    return this.storage.set (STORAGE_KEY, storedData);
  }
  
}

