import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { Class } from '../../interfaces/class';
import { Storage } from '@ionic/storage-angular'; // npm i @ionic/storage-angular
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { Session } from '../../interfaces/session';
import { SessionClass } from 'src/app/interfaces/sessionclass';
import { Classes } from '../../interfaces/classes';

@Component({
  selector: 'app-general-attendance',
  templateUrl: './general-attendance.page.html',
  styleUrls: ['./general-attendance.page.scss'],
})

export class GeneralAttendancePage {
  
  listData = [];

  classes: Classes = {
    userId: '',
    classes: []
  }

  sesionS: Session = {
    type:'session',
    name:'',
    id:''
  };

  constructor(private storage: Storage, private dataService: DataService) {
    // this.loadData();
  }

  ngOnInit() {
    this.loadSesion();
  }

  async loadSesion() {
    this.sesionS = await this.storage.get(this.sesionS.type);
    this.loadData();
  }

  async loadData(){
    this.classes = await this.storage.get(this.sesionS.id)
    this.classes.classes.forEach(element => {
      console.log(element.title)
      this.listData.push(element)
    });
    // this.listData = await this.dataService.getdata();
  }

  async addData() {
    await this.dataService.addData(`simon ${Math.floor(Math.random() * 100)}`);
    //this.loadData();
  }

  async removeData(index) {
    this.dataService.remvoveItem(index);
    this.listData.splice(index, 1);
  }

}
