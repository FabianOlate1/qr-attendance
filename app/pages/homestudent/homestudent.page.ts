import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Class } from '../../interfaces/class';
import { Storage } from '@ionic/storage-angular'; // npm i @ionic/storage-angular
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { Session } from '../../interfaces/session';
import { SessionClass } from 'src/app/interfaces/sessionclass';

@Component({
  selector: 'app-homestudent',
  templateUrl: './homestudent.page.html',
  styleUrls: ['./homestudent.page.scss'],
})
export class HomestudentPage implements OnInit {
  classSessionOpenned;

  sesionS: Session = {
    type:'session',
    name:'',
    id:''
  };

  constructor(private storage: Storage, private router:Router) { }

  class: Class = {
    title: 'Arquitectura de software',
    classCount: 4,
    assistedClasses: ['29/11/2022', '30/11/2022', '3/12/2022'],
    type: 'class',
  };

  clasS: Class = {
    title: 'calidad de software',
    classCount: 8,
    assistedClasses: ['11/11/2022', '12/11/2022'],
    type: 'class',
  };

  classesList = [];
  usernameS;

  ngOnInit() {
    this.loadSesion();
    // this.createClass();
  }

  async createClass() {
    // traigo la lista de clases del usuario y la aplico
    //await this.storage.set(this.class.id, this.class);
  }

  idGenerator() {
    return Math.floor(Math.random() * 1000000000);
  }

  async loadSesion() {
    this.sesionS = await this.storage.get(this.sesionS.type);
    this.usernameS = this.sesionS.name;
    // this.loadClasses()
  }

  async loadClasses() {
    const classesG = await this.storage.get(this.sesionS.id);
    if (classesG != null) {
      classesG.classes.push(this.class);
      classesG.classes.push(this.clasS);
      await this.storage.set(this.sesionS.id, classesG);

    }
  }
}
